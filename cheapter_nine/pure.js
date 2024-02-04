//!What is Pure functions
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed. It does not depend on any state or data change during a program’s execution. Rather, it only depends on its input arguments.
//* It Returns the same result if given the same arguments
//*It does not cause any observable side effects
//!pure function atar kono side effect nei
function sqr(n) {
  return n * n;
}
console.log(sqr(2));
console.log(sqr(2));
console.log(sqr(2));
//!ata pure function noy.karon er side effect ase.
var n = 10;
function change() {
  n = 100;
}
change();
console.log(n);

var point = {
  x: 10,
  y: 20,
};
//!ata pure function noy.karon er side effect ase.
function printPoing(point) {
  point.x = 100;
  point.y = 200;
  console.log(point);
}
printPoing(point);
console.log(point);