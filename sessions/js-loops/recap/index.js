/* 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

Hint: Don't forget to check for bad values like null/undefined
*/

const arraySheep = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true,
];

function countSheeps(sheep) {
	// TODO
	let counter = 0;
	for (let element of sheep) {
		// console.log('element', element);
		if (element) {
			counter++;
		}
	}
	console.log('counter: ', counter);
}
// countSheeps(arraySheep);

// TEST
const tests = [
	[[], 0],
	[[undefined], 0],
	[[null], 0],
	[[false], 0],
	[[true], 1],
	[[undefined, null, false, true], 1],
	[[undefined, null, false, true, true, false, null, undefined], 2],
	[
		[
			true,
			true,
			true,
			false,
			true,
			true,
			true,
			true,
			true,
			false,
			true,
			false,
			true,
			false,
			false,
			true,
			true,
			true,
			true,
			true,
			false,
			false,
			true,
			true,
		],
		17,
	],
];

for (const test of tests) {
	console.log('-------------------------------------------');
	countSheeps(test[0]);
	console.log('Expected result: ', test[1]);
}
