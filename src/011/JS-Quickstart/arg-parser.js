// node arg-parser.js --demo factorial
// node arg-parser.js --demo factorial --one-line
// Node accepts a space-separated (delimited) set of values as strings
console.clear();
const log = console.log;

log('Parsing args like a CLI...');
// All arrays have a property called
// .length
// which holds the number of items in
// the array
log(`There are ${process.argv.length} values passed into NodeJS:`);
// We can loop through an array with a
// traditional for loop or with a
// for..in loop or a for..of
// The following is an example of the
// for..of loop.
for(let arg of process.argv) {
    log('  - ', arg);
}

// By default, Node will have at least
// one item in its .argv array:
// - The path on your computer to where Node is installed.
// If you run a JavaScript file from Node,
// then there will be a second item in the
// array, which is the path to that JavaScript file.

if(process.argv[0] === process.argv0) {
    log('\nThe special .argv0 property is the path to Node on your computer.\n')
}


// Now, let's pretend we are a CLI...
let selectedDemo = "";
let onOneLine = false;

// I'll skip the first two elements in the .argv array
// so that I can focus on the remaining strings and treat
// them as information that this arg-parser.js program
// can use to perform some task.
for(let index = 2; index < process.argv.length; index++) {
    let arg = process.argv[index];
    if(arg === "--demo" && index + 1 < process.argv.length) {
        selectedDemo = process.argv[index + 1];
        index++; // skip one
    }
    if(arg === "--one-line") {
        onOneLine = true;
    }
}

if(selectedDemo === 'factorial') {
    let factorials = [];
    for(let count = 1; count < 10; count++) {
        let value = calculateFactorial(count);
        factorials.push(value);
    }

    if(onOneLine) {
        let output;
        output = factorials.join(', and ');
        log(output);
    } else {
        for(let index = 0; index < factorials.length; index++) {
            log(factorials[index]);
        }
    }
}

function calculateFactorial(number) {
    let fact = 1;
    for(let count = 1; count <= number; count++) {
        fact = fact * count;
    }
    let result = `${number}! is ${fact}`;
    return result;
}