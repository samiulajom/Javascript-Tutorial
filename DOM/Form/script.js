let name = document.getElementById(`name`);
name.addEventListener(`keypress`, function (e) {
  if (e.key === `Enter`) {
    // console.log(event.target.value);
    document.getElementById(
      `show-name`
    ).innerHTML = `<span style="color:red;">Your name is:</span> ${e.target.value}`;
    e.target.value = " ";
  }
});
//Checkbox
let skills = document.getElementsByName(`skills`);
let result = document.getElementById(`result`);
// console.log([...skills]);
let checkedSkills = [];
[...skills].forEach((skill) => {
  skill.addEventListener(`change`, function (event) {
    if (event.target.checked) {
      checkedSkills.push(event.target.value);
      outputSkills(result, checkedSkills);
    } else {
      let ind = checkedSkills.indexOf(event.target.value);
      checkedSkills.splice(ind, 1);
      outputSkills(result, checkedSkills);
    }
  });
});

function outputSkills(parent, skills) {
  let result = ``;
  skills.forEach((skill, index) => {
    result += `(${index + 1}) ${skill}  `;
  });
  parent.innerHTML = result;
}
//!list item niye kaj
let list = document.getElementById("list");

list.addEventListener(`dblclick`, function (event) {
  let myInput = event.target.innerText;
  event.target.innerHTML = ` `;
  let inputBox = createInputBox(myInput);
  event.target.appendChild(inputBox);
  inputBox.addEventListener(`keypress`, function (e) {
    if (e.key === `Enter`) {
      event.target.innerHTML = e.target.value;
    }
  });
});

function createInputBox(value) {
  let inp = document.createElement(`input`);
  inp.type = `text`;
  inp.className = `item`;
  inp.value = value;
  inp.style.width = `100%`;
  return inp;
}
