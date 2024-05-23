console.log('I am running');
/* --------------------
            MATH
------------------------*/

const isANumber = '1';
let myNumber = 20;

// Number + String
let suma = myNumber + isANumber;
// With typeof we see what type of data my variable is.
console.log('suma', typeof suma);

// with parseInt we convert to convert a string to a number.
suma = myNumber + parseInt(isANumber);
console.log('suma with parseInt', suma);

// If we parse some text we have NaN (Not a Number)
let numberWritten = 'one';
numberWritten = parseInt(numberWritten);
console.log('numberWritten after parsInt', numberWritten);

// Number - String
let minus = myNumber - isANumber;
console.log('suma', minus);

/* --------------------------
            Numbers
------------------------------- */

let age = 10;

// ADD
age = age + 1;
console.log('age = age + 1: ', age);
age++;
console.log('age++: ', age);
age += 1;
console.log('age += 1: ', age);

age = age + myNumber;
console.log('age = age + myNumber: ', age);
age += myNumber;
console.log('age += myNumber: ', age);

// Subtract
age = age - 1;
console.log('age = age - 1: ', age);
age--;
console.log('age--: ', age);
age -= 1;
console.log('age -= 1: ', age);

age = age - myNumber;
console.log('age = age - myNumber: ', age);
age -= myNumber;
console.log('age -= myNumber: ', age);

// Multiply.
age = age * myNumber;
console.log('age = age * myNumber: ', age);
age = age * 2;
console.log('age = age * 2: ', age);
age *= 2;
console.log('age *= 2: ', age);

// Divide.
age = age / myNumber;
console.log('age = age / myNumber: ', age);
age = age / 2;
console.log('age = age / 2: ', age);
age /= 2;
console.log('age /= 2: ', age);

// Module
let isEven = 10 % 2;

console.log('isEven: ', isEven);

console.log('age before module', age);
age %= 2;

// Power
let power = 3 ** 3;
console.log('power: ', power, 'more thing', myNumber, isANumber);
