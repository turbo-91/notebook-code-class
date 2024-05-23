const coaches = [
	{
		name: 'Gimena',
		age: 34,
	},
	{
		name: 'Marcell',
		age: 39,
	},
];

// Log Names
console.log('Name of coaches: ', coaches[1].name);

// Add city.
coaches[1].city = 'Berlin';
coaches[0].city = 'Montevide';

console.log('Coaches after adding city : ', coaches);
