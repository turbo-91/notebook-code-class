console.clear();

const form = document.querySelector('[data-js="form"]');
// We always want to make sure that we are grabbing the element correctly so we console log. Once that we are sure that is correctly grab, we can delete or comment the console.log
// console.log("form", form);

/* 
We want an event Listener in our form.
addEventListener(typeOfEvent, function) 

We learn how to write functions in different ways, all them can be use in an event Listener.
*/

// ---------------------------------------
// ARROW Function
// ---------------------------------------
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   console.log("Arrow Function");
// });

// ---------------------------------------
// FUNCTION key word
// ---------------------------------------
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("Function Function");
// });

// ---------------------------------------
// DEFINE a function
// ---------------------------------------
// function onSubmit(event) {
//   event.preventDefault();
//   console.log("OnSubmit Function");
// }

// We invoke or call the function.
// onSubmit();

// We want to pass the function, not call it. That why we write it without the ()
// form.addEventListener("submit", onSubmit);

// ---------------------------------------
// Function Expression.
// ---------------------------------------
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Expression Function");
// };

// form.addEventListener("submit", handleSubmit);

////////////////////////////////////////////////////////
// ----------------------------------------------------
////////////////////////////////////////////////////////

/* 
How can we grab the values of our form:
1. Grabbing each element of the form.
2. Using target.elements.
3. Using new FormData
*/

/* ------------------------------------------------------------------------------------
1. Grabbing each element of the form.

This way is tedious because every time we add or delete an HTML element we need to change too much the JS.
*/

// const firstName = document.getElementById("firstName");
// console.log("firstName: ", firstName);

// Function Expression.
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Expression Function");
//   console.log("firstName.value: ", firstName.value)
// };

/* ------------------------------------------------------------------------------------
2. Using target.elements.

This way is less tedious than option 1, but still we need to assign a variable for each element
*/

// Function Expression.
// const handleSubmit = (event) => {
//   event.preventDefault();
//   console.log("Expression Function");

//   // Using event.target.elements;
//   const formELements = event.target.elements;
//   console.log("Event ", event.target.elements);

//   const lastName = formELements.lastName.value;
//   const firstName = formELements.firstName.value;
//   const date = formELements.date.value;
//   console.log(
//     "Last Name: ",
//     lastName,
//     "\nFirst Name: ",
//     firstName,
//     "\nDate: ",
//     date
//   );
// };

/* ------------------------------------------------------------------------------------
3. Using new FormData constructor.

This way is less code and we love it!
*/

const handleSubmit = (event) => {
  event.preventDefault();
  //   console.log("Expression Function");

  console.log("event.target: ", event.target);
  // We use the FromData constructor, we don't need to understand what is does, but how to use it.
  // This constructor, return a FormData object which we don't know how to work with.
  const formData = new FormData(event.target);
  //   console.log("formData", formData);

  // Here we transform the FormData object into a JS object that we know how to work with.
  const data = Object.fromEntries(formData);
  //   console.log("data: ", data);

  // I can work with my form values.

  // Clear all the input after a submit
  event.target.reset();
};

form.addEventListener("submit", handleSubmit);

/* ------------------------------------------------------------------------------------
                        Let see how to limit the character in a field.
------------------------------------------------------------------------------------ */

// Fist we grab the input element.
const messageInput = document.querySelector('[data-js="personal-message"]');
console.log("messageInput", messageInput);

// We grab, the text element where we want to display the amount of characters left.
const characterLeft = document.querySelector(
  '[data-js="remaining-characters"]'
);
console.log("characterLeft", characterLeft);

// We define as a constant the MAX amount of character. Because is a LIMIT that won't change on time is a const and in caps.
const MAX_LENGTH = 150;

messageInput.addEventListener("input", (e) => {
  console.log("length: ", e.target);
  //   console.log("type of: ", typeof e.target.value.length);
  characterLeft.textContent = MAX_LENGTH - e.target.value.length;
});
