// Open the terminal in the folder that contains
// this file, and then type
// node --watch app.js
console.log('Hello Node');
console.log('My app.js has loaded');
console.log();

// Variable declaration vs. initialization
let quantity = 10;
let price = 5.95;
let message; // a variable declared but not given a value will be undefined

// Assignment statement
message = 'The following is a series of demos';
console.log(message);

// Template strings and placeholders
message = `The price is ${price} and the quantity is ${quantity}.`;
console.log(message);

// Arithmetic operators for numbers
let total = quantity * price;
// Arithmetic operator for strings (string concatenation)
message = 'The total amount is $ ' + total;
console.log(message);

// Data Types
console.log(`total is a ${typeof total}`);
console.log(`message is a ${typeof message}`);

// Type conversions: Numbers to Strings
let amount = total.toFixed(2);
console.log(`The total amount is $ ${amount}`);

message = `I used .toFixed(2) to convert a ${typeof total} into a ${typeof amount}`;
console.log(message);

// Simple Sequence
quantity = 20;
message = `\n\tChanging quantity to ${quantity} does not cause previous calculations to be re-evaluated.\n\tTotal is still ${total} and amount is still ${amount}.`;
console.log(message);

// More Simple Sequence
let discount = 2.15;
total = total - discount;

message = 'A discount was applied to your total.';
console.log(message);

message = `The new total is $ ${total}`;
console.log(message);


// Here, I'll make some logic errors
// (but they should be fixed by the time you re-visit this file....)
message = `The discount is $ ${discount}.`;
console.log(message);

message = `The original price was $${amount}`;
console.log(message);
