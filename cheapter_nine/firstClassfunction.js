//!1.A function can be stored in variable
function add(a, b) {
  return a + b;
}
var sum = add;
console.log(sum(2, 4));
//!2.A function can be stored in array
var arr = [];
arr.push(add);
console.log(arr);
console.log(arr[0](5, 5));
//*3.A function can be stored in object
var obj = {
  sum: add,
};
console.log(obj);
console.log(obj.sum(10, 5));
//!4.We can create function as need
setTimeout(function () {
  console.log(`I have created............`);
}, 100);
//!5.We can pass Function as an Arguments
//!6. We can return Function from Another Function