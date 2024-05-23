console.log('I am running');

// Old way
var oldWay = 3;

/* 
    After 2015 :D
*/

let newWay = 5;
const iAmConst = 8;

console.log('old way: ', oldWay);
console.log('newWay', newWay);

newWay = 10;
console.log('after re assigning newWay', newWay);

// Strings.
let text = 'I am a text';
console.log('I am a string: ', text);

text = 'I am 10 years old';
console.log('I am a string new: ', text);

// Booleans.
let myBoolean = true;
console.log('myBoolean', myBoolean);

myBoolean = false;
console.log('change myBoolean', myBoolean);

// Numbers
let myNumber = 20;
console.log('myNumber', myNumber);

// Big Int
let myBigInt = 10n;
console.log('myBigInt', myBigInt);

// I can re assign my variables to what ever I want. Be careful.
myBigInt = 'I am a string';
myNumber = 900n;

// null.
let myNull = null;
console.log('myNull', myNull);

// Undefine
let myUndefine;
console.log('myUndefine', myUndefine);

// Array.
const myArray = [true, 'String', 10, { name: 'Maria' }];
console.log('myArray', myArray);

// Objects.
const myObject = {
	cohortName: 'Caraway',
	amountStudents: 14,
	mySubObject: {
		name: 'Gimena',
		surname: 'Maria',
	},
};
console.log('myObject', myObject);

// Function.

function functionName() {
	// You write your code.
	console.log('I am in the function');
}

console.log('functionName', functionName);
