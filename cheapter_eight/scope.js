var a = `abc`;//gobal 
// if (true) {
//   if (true) {
//     var b = `I am B`;
//   }
// }
// console.log(b);//accessable
//! child parent er access pbe.but parent child er access pabe na.
/*function x() {
  function y() {
    var a = 10;
    // var c = 20;
    console.log(a);
  }
  // console.log(c); //not accessable
  y();
}
x();*/

function test(n) {
  function a() {
    return n % 3 === 0;
  }
  function b() {
    return n % 5 === 0;
  }
  if (a() && b()) {
    console.log(n + ` is division by 3 and 5`);
  } else {
    console.log(`Not a valid number`);
  }
}
test(10);
