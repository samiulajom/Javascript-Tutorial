let title = document.getElementById("title");
// title.style.color = `green`;
// title.style.fontSize =`40px`;
let styObj = {
  background: `black`,
  fontSize: `20px`,
  color: `green`,
};

let list = document.getElementById("list");
let listItems = list.getElementsByTagName(`li`);
console.log(listItems);

[...list.children].forEach((li) => Object.assign(list.style, styObj));
