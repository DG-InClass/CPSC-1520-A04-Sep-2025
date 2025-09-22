// This demonstrates using a parameter
// e.g. greetUser('Jane Doe');
// e.g. greetUser(prompt('Name:'));

// Traditional function declaration
function greetUser(username) {
    // select the h1
    var mainTitle = document.querySelector('h1.intro');
    // update the h1 inner HTML
    mainTitle.innerHTML = 'Welcome ' + username + ' to ' + mainTitle.innerHTML;
};

// Let's call this directly within our script.
greetUser('Stewart Dent');

// Create a function to describe the image on the page.
// This time, I'll use a constant variable with a function expression
const describeImage = function (description) {
    let imgTag = document.querySelector('img');
    imgTag.alt = description;
    imgTag.title = description;
}

// Here's another function, again as a Function Declaration
// this sample will show why I like constants with function expressions
// instead of Function Declarations
function appendToPage(content) {
    let currentHTML = document.body.innerHTML;
    let addedMarkup = `<div>${content}</div>`;
    document.body.innerHTML = currentHTML + addedMarkup;
    console.log('added', addedMarkup, 'to the current html', currentHTML);
    // Notice how my call to console.log() has 4 arguments
}
