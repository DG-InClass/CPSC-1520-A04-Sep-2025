/* 
node --watch grok-decisions.mjs
                            \_/
                             | Javascript Module
*/
import { describeDataType, getDataType, ify } from './about.mjs';

let nothing, something = 42;
let message;
message = `"nothing" is '${ify(nothing)}' and "something" is '${ify(something)}'\n`;
console.log(message);
message = `A boolean true is ${ify(true)}`;
console.log(message);

// Explore what comes back from the two supporting
// functions: describeDataType and getDateType
message = describeDataType(something);
console.log(message);
console.log(getDataType(something));
/*
The conditional_expression will be evaluated in terms
of being either true or false (JS Keywords).
Something is false (falsy) if:
    - false
    - null or undefined
    - the number zero - 0
    - an empty string - ""
if(conditional_expression) {
    true_side // statement or statement block
}
else
    false_side // statement or statement block
*/
console.log('-----------------');
/* Conditional Expressions
 *  A conditional expression is any combination of
 * operations involving arithmetic operators,
 * relational operators, logical operators, variables,
 * literal values, and/or function calls that return
 * a value.
 */
/* Relational Operators
    Allow us to compare two items
==      "is equal to" - equality operator
!=      "is not equal to" - equality operator
===     "is equal to" - identity operator
!==     "is not equal to" - identity operator
>       greater than
<       less than
>=      greater than or equal to
<=      less than or equal to
*/
// Variables may be re-used in subsequent examples
let success = true; // Boolean
let isEmployed = false; // Don't worry, you'll get there...

// Step 1) A simple if statement
if(success == true) {
    console.log('Success! The code inside this "block" will run.');
    console.log('Read on for more discoveries.\n');
}

if(success) {
    console.log('The conditional expression in an `if` statement just needs to work out as a boolean VALUE.');
    console.log('`success` is a boolean, there is no need to compare it to `true`.\n');
}

// Step 2) The else block
if(isEmployed) {
    // true side
    console.log('Well, it is always good to review the fundamentals.\n');
} else {
    // false side
    console.log('No fear! Perseverance is always needed when job hunting!');
    console.log('By reviewing the fundamentals, you will improve everything that builds on top of them!\n');
}

console.log('\nTHE END\n');
