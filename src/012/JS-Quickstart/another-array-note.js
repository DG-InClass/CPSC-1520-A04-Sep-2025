// node --watch another-array-note.js
console.clear();
console.log('Sorting Arrays');
console.log('==============');
const show = console.log;

// A) Sorting an array of numbers
let numbers = [2, 8, 4, 6, 3, 7, 12, 1];
let numbersSorted = numbers.sort(numberCompare);
show(numbersSorted);
// The key to sorting is building a comparison function
function numberCompare(a, b) {
    return parseFloat(a) - parseFloat(b);
}


// B) Sorting an array of strings
let strings = 'sorting an array of strings'.split(' ');

// C) Sorting case-sensitive strings in a non-case-sensitive way
//    TODO:

// D) Sorting in reverse (numbers only)

// E) Sorting playing cards
let cards = [ "JD", "9S", "0D", "5S", "AC", "9H", "2C", "0H" ];


