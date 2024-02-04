let li = document.createElement(`li`);
li.className = `item`;
li.setAttribute(`title`, `I am four item`);
li.innerHTML = `Four`;
let list = document.getElementById(`list`);
list.appendChild(li);

function myCreateElement(tagname, className, innerHTML) {
  let tag = document.createElement(tagname);
  tag.innerHTML = innerHTML || ` `;
  tag.className = className || ` `;
  return tag;
}

let li2 = myCreateElement(`li`, `item`, `five`); //!nije dr toiri kora function diye
list.appendChild(li2);
let p1 = myCreateElement(
  `p`,
  `lead`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque suscipit aut, obcaecati sint perspiciatis corporis tempora iusto recusandae optio.`
);
let p2 = myCreateElement(
  `p`,
  `lead`,
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus atque suscipit aut, obcaecati sint perspiciatis corporis tempora iusto recusandae optio.`
);
let div = myCreateElement(`div`, `cont`);
myappend(div, [p1, p2]);

// document.getElementsByClassName(`container`)[0].appendChild(div);
// let container = document.getElementsByClassName(`container`);
// container[0].appendChild(div);
list.insertAdjacentElement(`beforebegin`, div); //!jekono jay gaigay bosate
//!append function
function myappend(parent, children) {
  children.forEach((child) => parent.appendChild(child));
}
//!Update & Remove element
let firstChild = list.firstElementChild;
setTimeout(() => {
  firstChild.innerHTML = firstChild.innerHTML + `(MODIFIED)`;
  firstChild.style.color = `green`;
  firstChild.style.fontSize = `18px`;
}, 5000);
//!remove
// setTimeout(() => {
//   list.lastChild.remove();
// }, 3000);
//!Clonde korte..orthat kono kisur copy ane add korte
// let lastItem=list.lastElementChild.cloneNode(true);//*ata tag abong value sob e deeply clone korbe
let lastItem = list.lastElementChild.cloneNode(); //*ata tag k clone korleo value k clone korbe na .ajnno value dite hhobe
lastItem.innerHTML = `Six (by clonenode)`;
list.appendChild(lastItem);
