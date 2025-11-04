// node --watch another-array-note.js
console.clear();
console.log('Sorting Arrays');
console.log('==============');
const show = console.log;

// A) Sorting an array of numbers
let numbers = [2, 8, 4, 6, 3, 7, 12, 1];
// ✨ .sort() is a Mutating function
numbers.sort(numberCompare);
show(numbers);
// The key to sorting is building a comparison function
function numberCompare(a, b) {
    return parseFloat(a) - parseFloat(b);
}


// B) Sorting an array of strings
let strings = 'sorting an array of strings'.split(' ');
strings.sort();
show(strings);

// C) Sorting case-sensitive strings in a non-case-sensitive way
//    TODO:

// D) Sorting in reverse (numbers only)
numbers.sort(numberCompareReversed);
show(numbers)
function numberCompareReversed(a, b) {
    return parseFloat(b) - parseFloat(a);
}

// E) Sorting playing cards
let cards = [ "JD", "9S", "0D", "5S", "AC", "9H", "2C", "0H" ];
show('Original Cards:\n', cards);
show('Sorted by Value\n', cards.sort(compareByValue));
show('Sorted by Suit\n', cards.sort(compareBySuit));
show('Sorted by Value\n', cards.sort(compareByValue));


function compareBySuit(a, b) {
    return suitPosition(a) - suitPosition(b);
}

function suitPosition(card) {
    let position = 0;
    switch(card[1]) {
        case 'S':
            position = 1;
            break;
        case 'H':
            position = 2;
            break;
        case 'D':
            position = 3;
            break;
        case 'C':
            position = 4;
            break;
    }
    return position;
}

function compareByValue(a, b) {
    return acesLow(a) - acesLow(b);
}

function acesLow(card) {
    let position = 0;
    switch(card[0]) {
        case 'A':
            position = 1;
            break;
        case '0':
            position = 10;
            break;
        case 'J':
            position = 11;
            break;
        case 'Q':
            position = 12;
            break;
        case 'K':
            position = 13;
            break;
        default:
            position = parseInt(card[0]);
            break;
    }
    return position;
}

function compareByValueThenSuit(a, b) {
    let result = compareByValue(a, b);
    if(result === 0) {
        result = compareBySuit(a, b);
    }
    return result;
}