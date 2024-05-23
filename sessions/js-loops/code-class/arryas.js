const taylorSwiftSongs = [
	'Love Story',
	'You Belong with Me',
	'Blank Space',
	'Shake It Off',
	'I Knew You Were Trouble',
	'We Are Never Ever Getting Back Together',
	'Bad Blood',
	'22',
	'Style',
	'Wildest Dreams',
	'Delicate',
	'Me!',
	'Lover',
	'Cardigan',
	'Willow',
	'Evermore',
	'You Need To Calm Down',
	'The Man',
	'Red',
	'All Too Well',
];

// console.log('taylorSwiftSongs', taylorSwiftSongs);

// console.log(taylorSwiftSongs[4]);
// console.log(taylorSwiftSongs[5]);
// console.log(taylorSwiftSongs[taylorSwiftSongs.length - 1]);

// 1. variable initialize; stop condition; i value step
// increasing i value
// for (let i = 3; i < taylorSwiftSongs.length; i += 2) {
// 	console.log(i, ': ', taylorSwiftSongs[i]);
// }

// If my stop condition is grater than my length, undefine.
// for (let i = 3; i < 30; i += 2) {
// 	console.log(i, ': ', taylorSwiftSongs[i]);
// }

// decreasing i value
// for (let i = taylorSwiftSongs.length - 1; i >= 0; i--) {
// 	console.log(i, ': ', taylorSwiftSongs[i]);
// 	if (condition) {
// 		// return;
// 		break;
// 	}
// }

// 2. While
// I can add more conditions in my stop condition.
// let i = 0;
// let condition = true;
// while (i < taylorSwiftSongs.length && condition) {
// 	console.log(i, ': ', taylorSwiftSongs[i]);
// 	i++;
// }

// 3. for of,
// for (const/let arrayElement of array)
for (const song of taylorSwiftSongs) {
	console.log('song: ', song);
	if (song === '22') {
		console.log('Found it');
		break;
	}
}
