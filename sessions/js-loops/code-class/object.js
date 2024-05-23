const album1989 = {
	title: '1989',
	releaseDate: 'October 27, 2023',
	genre: ['Pop'],
	'label-new': 'Republic Records',
	singles: [
		'Shake It Off',
		'Blank Space',
		'Style',
		'Bad Blood',
		'Wildest Dreams',
		'Wonderland',
	],
};

// for in
for (const key in album1989) {
	console.log('key', key, '\talbum1989[key]: ', album1989[key]);
}

// Objects.

console.log('Dot notation: ', album1989.genre);
console.log('[] notation: ', album1989['genre']);
console.log('[] notation: ', album1989['label-new']);
