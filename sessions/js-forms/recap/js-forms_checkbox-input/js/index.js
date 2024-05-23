console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const success = document.querySelector('[data-js="success"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// So the first time we don't see the messages
hideTosError();
success.classList.add("hidden");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // --v-- write your code here --v--

  console.log("tosCheckbox: ", tosCheckbox.checked);

  /* 
  tosCheckbox -> true (is checked) -> submit form  & hide error message.
  tosCheckbox -> false (is not checked) -> show error message
  */

  // tosCheckbox.checked -> false
  if (!tosCheckbox.checked) {
    // Show error message
    showTosError();
    success.classList.add("hidden");
    return;
  }

  // tosCheckbox.checked -> true
  hideTosError();
  success.classList.remove("hidden");

  // --^-- write your code here --^--

  /* 
  ~~~ EXTRA ~~~
  */

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log("data: ", data);
  console.log("First Name: ", data["first-Name"]);

  // eslint-disable-next-line no-alert
  // alert("Form submitted");
});

// change, input, click
tosCheckbox.addEventListener("input", (e) => {
  if (e.target.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});
