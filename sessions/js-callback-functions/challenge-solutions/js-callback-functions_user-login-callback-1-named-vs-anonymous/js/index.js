console.clear();

function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

function showWelcomeMessage() {
  console.log('success 🎉')
}

function callback() {
  console.log('success 🎉')
}

// Call handleUserLogin below!
handleUserLogin(() => {
  console.log('success 🎉')
})

handleUserLogin(showWelcomeMessage)
