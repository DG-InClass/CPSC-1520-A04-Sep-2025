let counter = 0; // An initial value for my counter
// function that will increment and display the counter's value
const increment = function() {
    counter++;
    document.querySelector('div').innerText = `Clicked ${counter} times.`;
}

// To "wire up" my event listener, I follow two steps
// 1) Reference the element I want to respond to.
const theButton = document.querySelector('button');
// 2) Add a "listener" for a specific event
theButton.addEventListener('click', increment);
//                         \event/,\callback/
//                                  \ - it's the name of a function that
//                                      will be called whenever the event
//                                      occurs.
//                                    - Another word for a callback is
//                                      delegate