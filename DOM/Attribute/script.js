let list = document.getElementById("list");
let lastItem = list.lastElementChild;
console.log(lastItem);
//!attribut
console.log(lastItem.attributes);
console.log(lastItem.getAttributeNames());
console.log(lastItem.getAttributeNode(`class`));

console.log(lastItem.classList);
lastItem.setAttribute(`id`, `last-item`); //!ata best way attribute add korar jnno
let attr = document.createAttribute(`title`);
attr.value = ` I am last item`;
lastItem.setAttributeNode(attr);
