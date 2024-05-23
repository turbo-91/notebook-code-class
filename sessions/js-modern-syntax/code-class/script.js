console.log('Hi Caraway');

const sheldonCooper = {
	characterName: 'Sheldon Cooper',
	occupation: 'Theoretical physicist',
	maritalStatus: 'Married',
	spouseCharacterName: 'Amy Farrah Fowler',
	apartmentNumber: 4,
	actressName: 'Jim Parsons',
};

const leonardHofstadter = {
	characterName: 'Leonard Hofstadter',
	occupation: 'Experimental physicist',
	maritalStatus: 'Married',
	spouseCharacterName: 'Penny',
	apartmentNumber: 4,
	actressName: 'Johnny Galecki',
};

// console.log(bigBanTheoryMain);
// console.log(bigBanTheorySecondary);
// console.log(sheldonCooper);
// console.log(leonardHofstadter);

/* ---------------------------
            OBJECTS
--------------------------- */

// How we know how to do it.
// const nameCharacter = sheldonCooper.characterName;
// const actress = sheldonCooper.actressName;
// console.log('name', name, 'actress', actress);

// Destructuring
// the key is the variable name
// let { characterName, occupation, apartmentNumber } = sheldonCooper;
// console.log(
// 	'characterName',
// 	characterName,
// 	'\noccupation',
// 	occupation,
// 	'\napartmentNumber',
// 	apartmentNumber
// );

// If I change the variable the object doesn't change.
// characterName = 'Gimena';

// console.log('After changing name');
// console.log(
// 	'characterName',
// 	characterName,
// 	'\noccupation',
// 	occupation,
// 	'\napartmentNumber',
// 	apartmentNumber
// );
// console.log('sheldonCooper', sheldonCooper);

// A key that doesn't exist.
// let {
// 	characterName,
// 	occupation,
// 	apartmentNumber,
// 	children = 3,
// } = sheldonCooper;

// console.log(
// 	'characterName',
// 	characterName,
// 	'\noccupation',
// 	occupation,
// 	'\napartmentNumber',
// 	apartmentNumber,
// 	'\nchildren',
// 	children
// );

// Change the variable name, I don't want it to be the key name.
const {
	characterName: name,
	occupation,
	apartmentNumber,
	children = 3,
} = sheldonCooper;

// console.log('characterName', characterName);

console.log(
	'\nname',
	name,
	'\noccupation',
	occupation,
	'\napartmentNumber',
	apartmentNumber,
	'\nchildren',
	children
);

/* -----------------------------------
                FUNCTION 
------------------------------------- */

function logCharacter(
	{ actressName, characterName, children = 3 },
	wifeName = 'Amy'
) {
	console.log(
		`The actress ${actressName} play the rol of ${characterName} in the series Big Bang Theory where he has ${children} kids with ${wifeName}`
	);
}

// logCharacter(sheldonCooper);
// console.log('---------------------------------');
// logCharacter(sheldonCooper, 'Amy Farrah Fowler');

/* ----------------------------------------
                REST
------------------------------------------- */

// const { actressName, maritalStatus, ...whatever } = sheldonCooper;
// console.log('actressName', actressName);
// console.log('whatever: ', whatever);

// Se always how the object doesn't change.
// console.log('sheldonCooper: ', sheldonCooper);

/* ---------------------------
            ARRAY
--------------------------- */
const bigBanTheoryMain = [
	'Sheldon Cooper',
	'Leonard Hofstadter',
	'Penny',
	'Howard Wolowitz',
	'Rajesh Koothrappali',
	'Bernadette Rostenkowski-Wolowitz',
	'Amy Farrah Fowler',
];

const bigBanTheorySecondary = [
	'Stuart Bloom',
	'Emily Sweeney',
	'Leslie Winkle',
	'Mary Cooper',
	'Beverly Hofstadter',
	'Wil Wheaton',
];

console.log('bigBanTheoryMain', bigBanTheoryMain);
// Destructuring.
// const [sheldon, leonard, penny] = bigBanTheoryMain;

// console.log(
// 	'Element 1: ',
// 	sheldon,
// 	'\nElement 2: ',
// 	leonard,
// 	'\nElement 3:',
// 	penny
// );

// Skipping Element just leave the space empty between the comas.
// const [sheldon, leonard, , howard] = bigBanTheoryMain;

// console.log(
// 	'Element 1: ',
// 	sheldon,
// 	'\nElement 2: ',
// 	leonard,
// 	'\nElement 4:',
// 	howard
// );

// Rest
// const [sheldon, leonard, , ...variableName] = bigBanTheoryMain;

// console.log(
// 	'Element 1: ',
// 	sheldon,
// 	'\nElement 2: ',
// 	leonard,
// 	'\nNEW Array from Element 4:',
// 	variableName
// );

// Create a new array and add an element
//'Mary Cooper'
// const nyNewArray = [...bigBanTheoryMain, 'Mary Cooper'];

// console.log('nyNewArray: ', nyNewArray);

// const myTwoArray = [...bigBanTheoryMain, bigBanTheorySecondary];
// console.log('myTwoArray: ', myTwoArray);
