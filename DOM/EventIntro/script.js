let btn = document.getElementById(`btn`);
btn.onclick = function () {
  // alert(`I have clicked!`)
};
let list = document.getElementById(`list`);
btn.addEventListener(`click`, function (e) {
  //   alert(`I have clicked!`);
  let item = list.lastElementChild.cloneNode(true);
  item.innerHTML = `Newly created item`;
  list.appendChild(item);
});
//!Event delagation problem.sudu html er file er gulo remove hoy.javascrip er maddome add kora item remove hoy na
// [...list.children].forEach((li) => {
//   li.onclick = function (e) {
//     e.target.remove();
//   };
// });
//!Solution
list.addEventListener(`click`, function (e) {
  if (this.contains(e.target)) {
    e.target.remove();
  }
});

let box = document.getElementById(`box`);
box.addEventListener(`mousemove`, function (e) {
  //   document.getElementById(`x-value`).innerHTML = e.clientX;
  //   document.getElementById(`y-value`).innerHTML = e.clientY;
  document.getElementById(`x-value`).innerHTML = e.offsetX;
  document.getElementById(`y-value`).innerHTML = e.offsetY;
  if (e.offsetX === 50 && e.offsetY === 50) {
    alert(`50 50`);
  }
});
