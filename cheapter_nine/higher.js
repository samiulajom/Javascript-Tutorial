//*5.We can pass Function as an Arguments

//!1.First example
/*function add(a, b) {
  return a + b;
}
function manipulate(a, b, func) {
  var c = a + b;
  var d = a - b;
  //   function multiply() {
  //     var m = func(a, b);
  //     return c * d * m;
  //   }
  return function () {
    var m = func(a, b);
    return c * d * m;
  };
}
var multiply = manipulate(3, 4, add);
console.log(multiply());*/
//! 2.Example
function hello() {
  console.log(`I am use second function argument.`);
}

function world(func) {
  console.log(`congratulation you as a argument`);
  func();
}
world(hello);//argument hisebe pass hoiyese 
//*6. We can return Function from Another Function
