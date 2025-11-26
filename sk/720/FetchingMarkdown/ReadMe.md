# Fetching Markdown

This sample looks at using the `fetch()` API for something other than JSON. In fact, you can `fetch()` just about anything that you have an URL for.

The [`main.js`](./js/main.js) offers a couple of functions for the `fetch()` calls:

- `handleResponse()` - Processes the response as `.text()` instead of `.json()`
- `handleContent()` - Converts Markdown text to HTML. You can learn more about how that was set up in the [Read-Me](./content/ReadMe.md) content file.

## Extras

I've thrown in a couple of extras concepts beyond the `fetch()` call:

- We've got `markdown-it` and `@picocss/pico` as dependencies in our `package.json`. This illustrates how we can use third-party libraries in our application.
- The stylesheet is being included in our site *via JavaScript*!

    ```js
    import '@picocss/pico/css/pico.css';
    ```

- There's some `document.createElement()` examples at the end of the script file. One interesting item of note is **a valid reason to use `.innerHTML`**.

    ```js
    // Create a <footer><div>&copy; 2025 - Dan Gilleland</div></footer>
    let foot = document.createElement('footer');
    let div = document.createElement('div');
    let text = document.createTextNode(' 2025 - Dan Gilleland');

    div.innerHTML = '&copy; ';
    div.appendChild(text);
    foot.appendChild(div);

    document.body.appendChild(foot);
    ```

