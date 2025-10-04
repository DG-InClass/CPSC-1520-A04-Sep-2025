/* 
node --watch grok-decisions.mjs
*/
import { describeDataType, getDataType, ify } from './about.mjs';

let nothing, something = 42;
let message;
message = `"nothing" is '${ify(nothing)}' and "something" is '${ify(something)}'\n`;
console.log(message);


/*
## Decisions, Decisions...

- Basic concepts
  - brief narrative
  - links to articles (.e.g.: https://dgilleland.github.io/CPSC-1520/explanations/0025/#conditionals)

## Slow and Easy

- Steps 0-5

## Adding Complexity

- Steps 6-9

*/



/* The If-Else statement follows this grammar:

if(conditionalExpression)
    statementOrStatementBlock
else
    statementOrStatementBlock

where the "conditionalExpression" is some expression that will result in a true or false value, and the "statementOrStatementBlock" is either a single instruction/statement or a set of statements inside curly braces (statement block).

-----

Relational Operators

==      "is equal to" - equality operator
!=      "is not equal to" - equality operator
===     "is equal to" - identity operator
!==     "is not equal to" - identity operator
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to

*/

// Step 0) Let's arrange some information
let total = 12.95, count = 5, itemPrice = 2.59;
let five = '5';
let average;
// NOTE: 2.59 * 3 === 7.77

let radius = 1;
let circumference, area;

let success = true;
let isEmployed = false; // Don't worry, you'll get there...

let person = {
    name: 'Stewart Dent',
    hasDiploma: true
}

let job = {
    position: 'Junior Developer',
    hired: null
}

// Step 1) A Simple if Statement
//          At the heart of our if statement is the conditional expression
if(success == true) {
    console.log('Success! The code inside this "block" will run.');
    console.log('Read on for more discoveries.\n');
}

if(success) {
    console.log('The conditional expression in an `if` statement just needs to work out as a boolean VALUE.');
    console.log('Since `success` is a boolean, there is no need to compare it to `true`.\n');
}

if(isEmployed == true) {
    console.log('You have a job as a programmer? Then you can fast-track these simple samples...\n');
}

// Step 2) The else Block
if(isEmployed) {
    console.log('Well, it is always good to review the fundamentals!\n');
} else {
    console.log('Don\'t fear! Perseverance is always needed when job hunting!');
    console.log('By reviewing the fundamentals, you will improve everything that builds on top of them!\n');
}

// Step 3) Truthy or Falsy
if(count == five) {
    // The two values match (kinda)
    message = `Loosely speaking, ${count} equals ${five}`;
    console.log(message);
}

if(count === five) {
    // The two values dont STRICTLY match, because they are different data types.
    message = 'Nah, I don\'t believe you.\t';
    console.log(message);
} else {
    message = `BUT, count (${count}) is a ${typeof count} and five (${five}) is a ${typeof five}.\n`;
    message += 'So, they are not "strictly" equal.\n';
    console.log(message);
}

// Step 4) Relational Operators
console.log('Relational Operators');
let result; // We'll set this value using different operators
console.log(' -5  -4  -3  -2  -1   0   1   2   3   4   5');
console.log('__|___|___|___|___|___|___|___|___|___|___|__');
message = `${'greater-than' > 'greater'}`;
console.log(message)

// Step 5) Logical Operators

// Step 6) Flow-Control: Stacking

// Step 7) Flow-Control: Nesting

// Step 8) Complex Conditionals

// Step 9) Function Calls in Conditionals

