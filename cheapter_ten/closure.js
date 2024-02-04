//Closure is when a function is able to remember and access it's lexical scopre even when that function executing outside it's lexical scope
//able to remember and access it's lexical scopre
// when that function executing outside it's lexical scope
/*function test() {
  var msg = `I am learning lexical scope and closure`;
  function sayMsg() {
    console.log(msg);
  }
  sayMsg();
}
test();*/

function test() {
  var msg = `I am learning lexical scope and closure`;
  return function () {
    console.log(msg);
  };
}
var sayMsg = test();
sayMsg();

//!for loop a kaj korar somoy problem hoy aitar sollution
//*its call effi
for (var i = 1; i <= 5; i++) {
  (function (n) {
    setTimeout(function () {
      console.log(n);
    }, 1000 * n);
  })(i);
}
