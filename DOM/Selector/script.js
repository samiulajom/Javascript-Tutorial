// let title = document.getElementById(`title`);
// console.log(title);
// let paragraph = document.getElementsByClassName(`lead`);
// console.log(paragraph);
// let name = document.getElementsByTagName(`h2`);
// console.log(name);
// let group=document.getElementsByName(`item`);
// console.log(group);
//!niser duita diye sob select kora jay
let title = document.querySelector(`title`);
console.log(title);
let paragraph = document.querySelectorAll(`.lead`);
console.log(paragraph);
let name = document.querySelector(`h2`);
console.log(name);
let group = document.querySelector(`.groupItem`);
console.log(group);
let items = document.querySelectorAll(`[name="item"]`);
console.log(items);
let munia = document.querySelectorAll(`[name="munia"]`);
console.log(munia); //!attribute select korar system
//!Get element vs query selector
let li1 = document.getElementsByTagName(`li`);//Element node
let li2 = document.querySelectorAll(`li`);// node[element,comment,text]
// console.log(li1);
// console.log(li2);
console.log(li1.constructor.name);
console.log(li2.constructor.name);
let ul=document.querySelector(`ul`);
console.log(ul.children);
console.log(ul.childNodes)