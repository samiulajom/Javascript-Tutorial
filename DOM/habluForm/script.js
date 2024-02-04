let userName = document.querySelector(`#Username`);
let email = document.querySelector(`#email`);
let password = document.querySelector(`#password`);
let password2 = document.querySelector(`#password2`);
let form = document.querySelector(`#form`);
//!error
function showError(input, message) {
  let formControl = input.parentElement;
  formControl.className = `form-control error`;
  let small = formControl.querySelector(`small`);
  small.innerHTML = message;
}
//!success
function showSuccess(input) {
  let formControl = input.parentElement;
  formControl.className = `form-control success`;
}
//!email validation
function chackMail(input) {
  const R =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (R.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, `Email is not valid`);
  }
}
function checkInputLength(input, min, max) {
  if (input.value.length < min) {
    showError(
      input,
      `${GetFielName(input)} You must be at least ${min} characters!`
    );
  } else if (input.value.length > max) {
    showError(
      input,
      `${GetFielName(input)} You must be less then ${max} characters!`
    );
  } else {
    showSuccess(input);
  }
}

function GetFielName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, `Password is not Valid!`);
  }
}

form.addEventListener(`submit`, (e) => {
  e.preventDefault();
  checkInputLength(userName, 3, 25);
  checkInputLength(password, 6, 30);
  chackMail(email);
  checkPasswordMatch(password, password2);
});
