// Add in the code from the walk-through and observe the page behaviour.
// 1) Let's prompt the user for a couple of numbers
let firstNumber = prompt('Enter a number:');
let secondNumber = prompt('Enter another number, please:');

// console.log(typeof firstNumber);
// 2) Make sure I'm working with numeric data types
let first = parseFloat(firstNumber);
let second = parseFloat(secondNumber);

// 3) Do the math...
let answer = first + second;

// 4) Put the information into the web page
let firstOutput = document.querySelector('#firstNumber');
firstOutput.innerText = first;
let secondOutput = document.querySelector('#secondNumber');
secondOutput.innerText = second;
let answerOutput = document.querySelector('#answer');
answerOutput.innerText = answer;

