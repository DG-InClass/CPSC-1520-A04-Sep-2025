const BASE_URL = 'https://imgs.xkcd.com/comics/';
const DEFAULT = 'https://imgs.xkcd.com/comics/tags.png'; // 1144
const JSON_URL = 'https://xkcd.com/{id}/info.0.json';
const JSON_URL_LATEST = 'https://xkcd.com/info.0.json';


const favorites = [1144, 3170]

const echo = (x) => {
    console.log(x);
    return x;
}

fetch(JSON_URL.replace('{id}', '1144'), {
    mode: 'cors'
})
    .then(x => x.json())
    .then(echo);

class Xkcd extends HTMLElement {
    constructor() {
        super();
        // Keep styles confined to this component only.
        const shadow = this.attachShadow({ mode: "open" });
        const img = document.createElement('img');
        img.src = DEFAULT;
        shadow.appendChild(img);
        this.shadowRoot;
    }

    static get observedAttributes(){
        return ['comic'];
    }    

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(
        `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
    }
}


customElements.define('xk-cd', Xkcd);
