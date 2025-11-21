# Intro to Timeouts

Let's add some timeouts for all the buttons. We'll be using the number of milliseconds noted on each button's `data-ms` attribute.

```js
const buttons = document.querySelectorAll('input[type=button]');
buttons.forEach(btn => {
    const ms = parseInt(btn.dataset.ms);
    const timerRef = setTimeout(() => {
        btn.disabled = true;
    }, ms);
    btn.dataset.timer = timerRef;
});
```

Now, let's update the event handler for the button clicks and clear the timeout for the button's timer after we determine that it's being clicked only once.

```js
// Add this in the correct spot
clearTimeout(btn.dataset.timer);
```
