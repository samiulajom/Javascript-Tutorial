let form = document.getElementById(`form`);
form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  //   console.log(this.length);
  //   console.log(this.elements[1]);
  //   console.log(this[`email`]);
  let isValid = false;
  let formData = {};
  [...this.elements].forEach((e) => {
    // console.log(e.type, e.name, e.value);
    if (e.type !== `submit`) {
      isValid = validator(e);
      if (isValid) {
        formData[e.name] = e.value;
      } else {
        alert(`${e.name} is Required`);
      }
    }
  });
  if (isValid) {
    console.log(formData);
    this.reset();
  }
});

function validator(e) {
  if (!e.value) {
    return false;
  }
  return true;
}
