/* ------------------------------
            OBJECTS

key-value
------------------------------ */

const myObject = {
	name: 'Maria',
	age: 20,
	city: 'Berlin',
	'Birth City': 'Montevideo',
	2: true,
};

// Dot notation.
// console.log('Dot notation: ', myObject.age);

// [] Notation
// console.log('[] Notation 2 words: ', myObject['Birth City']);
// console.log('[] Notation one word: ', myObject['name']);

// Create new key - value pair.
myObject.knowJs = true;

// console.log('My Object after knowJs: ', myObject);

// Be careful!
myObject.age = 30;
// console.log('My Object after age: ', myObject);

// Delete a Key - value pair
delete myObject['2'];
console.log('My Object after deleting: ', myObject);

// Add an Array to my object.
const favoriteMovies = ['Holiday', 'Harry Potter', 'TS'];

myObject['favorite Movies'] = favoriteMovies;
console.log('My object after adding my favorite movies: ', myObject);

// Console log one element of my Favorites Movies
console.log('One Favorite Movie', myObject['favorite Movies'][1]);

// Add something to my favorite movies.
myObject['favorite Movies'].push('Catch me if you can');
console.log('My Object after adding favorite movie: ', myObject);
