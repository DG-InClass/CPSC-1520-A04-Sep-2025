
const DEFAULT_IMG = 'https://imgs.xkcd.com/comics/tags.png'; // nice fallback
const LATEST_JSON = 'https://xkcd.com/info.0.json';          // latest
const ID_JSON     = 'https://xkcd.com/{id}/info.0.json';     // by number

class Xkcd extends HTMLElement {
  #controller = null; // AbortController for in-flight fetches

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // UI skeleton
    const style = document.createElement('style');
    style.textContent = `
      :host { display: inline-block; max-width: 100%; }
      .frame { position: relative; }
      img { display: block; max-width: 100%; height: auto; }
      .caption { font: 14px/1.4 system-ui, sans-serif; color: #444; margin-top: 6px; }
      .status { font: 12px/1.4 system-ui, sans-serif; color: #777; }
      .loading { color: #555; }
      .error { color: #b00; }
    `;

    const wrapper = document.createElement('div');
    wrapper.className = 'frame';

    const status = document.createElement('div');
    status.className = 'status';

    const img = document.createElement('img');
    img.alt = 'xkcd';
    img.src = DEFAULT_IMG;

    const caption = document.createElement('div');
    caption.className = 'caption';

    wrapper.append(img, status, caption);
    this.shadowRoot.append(style, wrapper);

    // Cache references
    this._els = { img, status, caption };
  }

  static get observedAttributes() { return ['comic']; }

  get comic() { return this.getAttribute('comic'); }
  set comic(v) {
    if (v == null) this.removeAttribute('comic');
    else this.setAttribute('comic', String(v));
  }

  connectedCallback() {
    // Initialize from current attribute
    this.#loadFromAttribute();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'comic' && oldValue !== newValue) {
      this.#loadFromAttribute();
    }
  }

  async #loadFromAttribute() {
    const value = (this.getAttribute('comic') || '').trim();
    const { img, status, caption } = this._els;

    // Cancel any prior fetch
    if (this.#controller) {
      this.#controller.abort();
    }
    this.#controller = new AbortController();

    // Basic validation + URL derivation
    let url;
    if (!value || value.toLowerCase() === 'latest') {
      url = LATEST_JSON;
    } else if (/^\d+$/.test(value)) {
      url = ID_JSON.replace('{id}', value);
    } else {
      // If you want to support safe_title or filename, you'd need a map/source.
      // For now, treat non-numeric values as error.
      this.#renderError(`Invalid comic value "${value}". Use a number (e.g., 614) or "latest".`);
      return;
    }

    // Loading state
    caption.textContent = '';
    status.textContent = 'Loading…';
    status.className = 'status loading';
    img.src = DEFAULT_IMG;
    img.alt = 'Loading xkcd…';

    // Fetch with timeout + CORS defaults
    const controller = this.#controller;
    const timeoutMs = 8000;
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    try {
      const res = await fetch(url, {
        // mode: 'cors', // default; explicit is fine too
        signal: controller.signal,
        // credentials: 'omit' // default; XKCD doesn't require cookies
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${url}`);
      }

      // If the server did not include CORS headers, browsers would block here.
      // XKCD generally serves with permissive CORS. If you ever hit an opaque
      // response, DO NOT use `no-cors`; instead use a proxy you control.
      const data = await res.json();

      // Expected XKCD fields: { num, img, title, alt, safe_title, ... }
      const { img: src, title, alt, num } = data;

      if (!src) {
        throw new Error('Response missing "img" URL');
      }

      // Update UI
      img.src = src;
      img.alt = alt || title || `xkcd #${num ?? ''}`;
      caption.textContent = title ? `#${num} — ${title}` : (num ? `#${num}` : '');
      status.textContent = '';
      status.className = 'status';

    } catch (err) {
      // Distinguish abort vs other errors
      if (err.name === 'AbortError') {
        // Swallow aborts caused by rapid attribute changes
        return;
      }
      // For CORS/network errors, show a friendly message
      this.#renderError(this.#friendlyError(err));
    } finally {
      clearTimeout(timeout);
    }
  }

  #friendlyError(err) {
    const msg = String(err?.message || err);
    if (msg.includes('TypeError') || msg.toLowerCase().includes('cors')) {
      return 'Could not load from XKCD (possible CORS or network issue). Try again.';
    }
    return `Error loading XKCD: ${msg}`;
  }

  #renderError(message) {
    const { img, status, caption } = this._els;
    img.src = DEFAULT_IMG;
    img.alt = 'xkcd (fallback)';
    status.textContent = message;
    status.className = 'status error';
    caption.textContent = '';
  }
}

customElements.define('x-kcd', Xkcd);
