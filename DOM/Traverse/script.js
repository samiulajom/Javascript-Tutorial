// let list = document.getElementById(`list`);
// console.log(list);
// //!parent
// let parent = list.parentElement;
// console.log(parent);
// //!children
// let children = list.children;
// console.log(children);
// //!sibling
// console.log(list.previousElementSibling); //h1.title
// console.log(list.nextElementSibling); //null
// let li = document.querySelector(`li`);
// console.log(li.previousElementSibling); //nul
// console.log(li.nextElementSibling); //item two
///!Element child
// console.log(list.firstElementChild);
// console.log(list.lastElementChild);
//!How to Loop Throw HTML Collections
let listItem = document.getElementsByTagName(`li`);
// let listItems=Array.from(listItem);
// let listItems = Array.prototype.slice.apply(listItem);
let listItems = [...listItem];//!ata best and easy way

listItems.forEach((li, index) => {
  let text = li.innerHTML;
  li.innerHTML = `(${index + 1}) ${text}`;
});
