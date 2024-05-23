/* ----------------------------------
                Arrays
-------------------------------------- */

const myArray = [
	23,
	'Strings',
	true,
	[1, 2, 3],
	{ name: 'maria' },
	20n,
	null,
	12,
];

console.log('My Array first position: ', myArray[0]);
console.log('My Object in my Array: ', myArray[4]);

// My last element Dynamical
console.log('My last element of my Array: ', myArray[myArray.length - 1]);

// My second last element Dynamical
console.log(
	'My second last element of my Array: ',
	myArray[myArray.length - 2]
);

// My last element Dynamical other way
console.log('My last element of my Array other way: ', myArray.at(-1));

// For the length we count from 1
console.log('My array length: ', myArray.length);

// For the position, index we count form 0.
//               0         1      2       3          4
const colors = ['red', 'green', 'blue', 'orange', 'purple'];
console.log('Colors: ', colors);

/* -----------------------------------------
    ADDING AND REMOVING elements from my array
----------------------------------------- */

// 1. Manually
colors[colors.length] = 'black';

console.log('Colors after adding black: ', colors);

// I'm changing the value in the position indicated, I am not adding it.
colors[3] = 'pink';
console.log('Colors after pink: ', colors);

// 2. Using JS Methods.
// push -> Add at the end of my array.
colors.push('yellow');
console.log('Colors after PUSH: ', colors);

colors.push('turquesas', 'salmon', 'rojo', 'azul');
console.log('Colors after PUSH Spanish: ', colors);

//pop -> Remove the last element.
const myLastElement = colors.pop();
console.log('myLastElement removed: ', myLastElement);
console.log('Colors after pop: ', colors);

colors.pop();
console.log('Colors after pop 2: ', colors);

//unshift -> Add at the beginning of the Array.
colors.unshift('grey');
console.log('Colors after UNshift: ', colors);

//shift -> Remove the first element of my Array
colors.shift();
console.log('Colors after SHIFT: ', colors);

/* -------------------------------------
                    SLICE
----------------------------------------- */
const myFistSlice = colors.slice(2, 4);
myFistSlice.push('yellow');
console.log('myFistSlice: ', myFistSlice);
colors.unshift('grey');
console.log('Colors AFTER SLICE: ', colors);

/* -------------------------------------
                    SPLICE
----------------------------------------- */
colors.splice(1, 0, 'ROJO');
console.log('Colors after SPLICE: ', colors);

colors.splice(5, 1, 'AZUL');
console.log('Colors after SPLICE?: ', colors);
