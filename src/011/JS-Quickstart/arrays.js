// node --watch arrays.js
console.clear(); // clear the screen
const log = console.log;

// 1) Strings and Arrays
//    An array is a collection of elements.
//    An array is like a comma-separated set of values.
topic("Strings and Arrays");
let message = "Work hard and you'll get Arrays!";
let words = message.split(' ');
log("When we split a sentance into words:\n", words);

// Discover for..in
//  The variable `index` is the position of an
//  item in the array. I use for..in whenever I
//  am interested in the location of the item in
//  the array.
for(let index in words) {
    let aWord = words[index];
    //          \__________/
    //           | words at the position index
    message = `words at [${index}] is ${aWord}`;
    log(message);
}
log();

// Discover for..of
//  The variable `aWord` is the actual item in the
//  array. I use for..of whenever I am interested in
//  directly getting the contents of the array
for(let aWord of words) {
    log('- ',aWord);
}

/* To compare the for..in and the for..of with a
   regular for statement, consider this equivalent:

for(let index = 0; index < words.length; index++) {
    let aWord = words[index];
    // do whatever with the `index` or `aWord` variables
}   
 */



// 2) Helpful Arrays for Dates
topic("Helpful Arrays for Dates");
// Get the current date. TODO: Try Date functions.
let now = new Date();
//  now.getYear()
//  now.getFullYear()
//  now.getMonth()  <-- A zero-based number
//  now.getDay()    <-- A zero-based number
//  now.getDate()

// Build our own arrays
//  This is an example of initializing/declaring an
//  array of hard-coded values.
let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

let weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
log(`The month names are:\n  "${monthNames.join(', ')}"`);
// In the line above, the .join() is a function that
// every array has. It's purpose is to take all the 
// array items and combine them into a single string.

message = `Today is ${weekDays[now.getDay()]}, ${monthNames[now.getMonth()]} ${now.getDate()}\n`;

log(message);

for(let index = 0; index < weekDays.length; index++) {
    message = `weekdays[${index}] is ${weekDays[index]}`;
    log(message);
}


// ======================
/**
 * Displays the supplied title with a double-underline.
 * @param {string} title Text to display as a title.
 */
function topic(title) {
    log();
    log(title);
    log("==========");
}
