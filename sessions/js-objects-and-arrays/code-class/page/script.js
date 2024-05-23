console.log('I am link');

const color = document.querySelector('[js-data="color"]');
const title = document.querySelector('h2');

console.log('color', color);
console.log('title', title);

color.addEventListener('click', (event) => {
	console.log('I am in the event', event);
});
