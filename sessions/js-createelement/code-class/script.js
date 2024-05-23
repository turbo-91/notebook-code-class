console.clear();

const cardContainer = document.querySelector('[data-js="card-container"]');
const form = document.querySelector('[data-js="card-form"]');

console.log('cardContainer: ', cardContainer);
console.log('form: ', form);

let counter = 0;

/* 
To insert HTML via JS we have 2 ways:
1. INNERHTML
2. createElement Method
*/

// 1. using INNERHTML
// function onSubmit(e) {
// 	e.preventDefault();
// 	console.log('I am in the onSubmit');

// 	const formData = new FormData(e.target);
// 	const data = Object.fromEntries(formData);

// 	console.log('data: ', data);
// 	counter++;

// 	// cardContainer.innerHTML += '<p>' + counter + '</p>';

//     // If we want more HTML elements we need to write them.
// 	cardContainer.innerHTML +=
// 		' <section class="card"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/1200px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg"><p>' +
// 		counter +
// 		'</p>' +
// 		'</section>';
// }

// 2. using createElement Method.
// One Element only
// function onSubmit(e) {
// 	e.preventDefault();
// 	console.log('I am in the onSubmit');

// 	const formData = new FormData(e.target);
// 	const data = Object.fromEntries(formData);

// 	console.log('data: ', data);
// 	counter += 1;
// 	// document.createElement(name of the HTML element we want to create as a string)

//     // Creating a p element
// 	const pElement = document.createElement('p');
//     // Inserting Text to my p element
// 	pElement.textContent = 'The counter is ' + counter;
// 	console.log('pElement: ', pElement);

// 	// I am inserting/ appending the pElement inside my cardContainer
// 	cardContainer.append(pElement);
// }

// 2. using createElement Method.
// Multiple Element only
// function onSubmit(e) {
// 	e.preventDefault();
// 	console.log('I am in the onSubmit');

// 	const formData = new FormData(e.target);
// 	const data = Object.fromEntries(formData);

// 	console.log('data: ', data);
// 	counter += 1;
// 	// document.createElement(name of the HTML element we want to create as a string)

// 	// Creating a p element
// 	const pElement = document.createElement('p');
// 	// Inserting Text to my p element
// 	pElement.textContent =
// 		'The counter is ' + counter + ' and my name is ' + data['input-andrii'];
// 	console.log('pElement: ', pElement);

// 	// Creating a image element
// 	const imageCard = document.createElement('img');
// 	//setAttribute( attribute name, attribute value)
// 	imageCard.setAttribute(
// 		'src',
// 		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/1200px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg'
// 	);
// 	imageCard.setAttribute('alt', 'Flowers');

//     // Creating a section element and adding a class.
// 	const newCard = document.createElement('section');
// 	newCard.classList.add('card');

// 	// I am inserting/ appending the pElement inside my cardContainer
// 	newCard.append(paragraph, imageCard);
// 	cardContainer.append(newCard);
// }

// 2. using createElement Method.
// Separating in Functions

function createImage() {
	const imageCard = document.createElement('img');
	//setAttribute( attribute name, attribute value)
	imageCard.setAttribute(
		'src',
		'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg/1200px-Bachelor%27s_button%2C_Basket_flower%2C_Boutonniere_flower%2C_Cornflower_-_3.jpg'
	);
	imageCard.setAttribute('alt', 'Flowers');
	return imageCard;
}

function createParagraph(name, passCounter) {
	// Creating a p element
	const pElement = document.createElement('p');
	// Inserting Text to my p element
	pElement.textContent =
		'The counter is ' + passCounter + ' and my name is ' + name;
	console.log('pElement: ', pElement);
	return pElement;
}

function onSubmit(e) {
	e.preventDefault();
	console.log('I am in the onSubmit');

	const formData = new FormData(e.target);
	const data = Object.fromEntries(formData);

	console.log('data: ', data);
	counter += 1;
	// document.createElement(name of the HTML element we want to create as a string)

	const paragraph = createParagraph(data['input-andrii'], counter);
	const imageCard = createImage();

	const newCard = document.createElement('section');
	newCard.classList.add('card');

	// I am inserting/ appending the pElement inside my cardContainer
	newCard.append(paragraph, imageCard);
	cardContainer.append(newCard);
}

form.addEventListener('submit', onSubmit);
