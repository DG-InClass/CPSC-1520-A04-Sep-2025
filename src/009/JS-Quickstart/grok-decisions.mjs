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


console.log('\nTHE END\n');
