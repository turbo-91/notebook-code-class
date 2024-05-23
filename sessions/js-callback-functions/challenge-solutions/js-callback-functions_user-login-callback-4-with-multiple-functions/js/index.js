console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}






function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are logged in now as ${userRole}.`)
}
function showErrorMessage(errorMessage) {
  console.log(`Login error: ${errorMessage}`)
}

handleUserLogin(showWelcomeMessage, showErrorMessage, 'Rick Sanchez')