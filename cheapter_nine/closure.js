//! function er vaire declare korle seta hobe global. abong function er vitor baire declare kora kisu k, argument akare na niye.direct access korle seta hobe clouser
// function a() {
//   var x = 5;
//   return function () {
//     console.log(x);
//   };
// }
// var abc = a();
// console.dir(abc);
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  return function () {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  };
}
var abc = init();
console.dir(abc);
