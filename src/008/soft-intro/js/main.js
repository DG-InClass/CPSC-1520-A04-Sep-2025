/* Soft Intro to Events
    Consider that the HTML elements are structured/nested as follows:
    - <body>
        - <h1>
            - <button>
            - <small>
                - <a>
        - <pre>
            - <output>
*/
console.log('JavaScript file loaded!');

// I moved the handleClick() event to a different JavaScript file,
// so I need to access here by importing it
import { handleClick } from './event-handlers';

let heading = document.querySelector('h1');
heading.addEventListener('click', handleClick);

// TODO: Add an event listener for the button with id "register".
//       Listen for the 'dblclick' event.
//       Prompt the user for their name, then for their email,
//       then output the information to the #feedback element.
let theButton = document.getElementById('register');
theButton.addEventListener('dblclick', function(evt) {
    // Here is the code that will run when the dblclick event happens
    let name = prompt('Please enter your name:');
    let email = prompt('Please enter your email:');
    let result = `Thank you ${name}. We sent a confirmation email to ${email}.`;
    let outputTag = document.getElementById('feedback');
    outputTag.innerText = result;
});

// TODO: Add another event listener for the heading, this time for
//       the 'dblclick' event.
//       Try changing the theme by assigning either 'light' or 'dark'
//       to the following element's property:
//          document.querySelector('html').dataset.theme
//       Try it out, then inspect the elements in the Dev Tools.