/*

	Create variables to hold the receiving party's name, disclosing party's name, and the date

	Prompt the user for the values to be used for these variables (i.e. prompt for disclosing party's name, date, etc.)

	Update the document with the entered values in the places indicated by brackets (i.e. [the Disclosing Party] should be replaced by the disclosing party's name)

	Use the skills you have learned up to this point.
*/
let agreementDate = document.querySelector('.date'); // get the element
agreementDate.innerText = 'Sep 15, 2025'; // change the text inside

// Get the parties to the contract/agreement
let discloser = prompt('Enter the name of the disclosing party:');
let receiver = prompt('Enter the name of the receiving party:');

let element; // a general variable that I will re-use...
element = document.querySelector('.disclosing-party');
element.innerText = discloser;
element = document.querySelector('.signature .disclosing-party');
element.innerText = discloser;
element = document.querySelector('.receiving-party');
element.innerText = receiver;
element = document.querySelector('.signature .receiving-party');
element.innerText = receiver;
