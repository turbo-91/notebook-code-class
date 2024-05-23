console.clear();

const saveButton = document.querySelector('[data-js="save-button"]');
const cancelButton = document.querySelector('[data-js="cancel-button"]');
const restoreButton = document.querySelector('[data-js="restore-button"]');
const skipButton = document.querySelector('[data-js="skip-button"]');
const buttonContainer = document.querySelector(
  '[data-js="custom-button-container"]'
);

// anonymous callback function 
saveButton.addEventListener('click', function() {
  console.log('clicking')
})

// named callback function
function handleCancel(event) {
  console.log(event.currentTarget)
  console.log('cancelling')
}
cancelButton.addEventListener('click', handleCancel)


// function that creates a button element
function Button(text, callback) {
  const button = document.createElement('button')
  button.addEventListener('click', callback)
  button.textContent = text
  console.log(button)
  return button
}

const alertButton = Button('Alert', function() {
  console.log('alert')
}) // Alert
const helloButton = Button('Hello', function() {
  console.log('hello')
}) // Hello

buttonContainer.append(alertButton) 
buttonContainer.append(helloButton) 
