console.log('My basic-math.js has loaded');

let number = .1 + .1;
console.log(number);
number = .1 + .1 + .1;
console.log(number);

// What is the area of a circle?
// Given a radius of 10, what is the area?
let radius = 10;
let area = 2 * Math.PI * radius * radius;
//                       Math.pow(radius, 2);
console.log(`The area of a circle with ${radius} radius is ${area}.`);
