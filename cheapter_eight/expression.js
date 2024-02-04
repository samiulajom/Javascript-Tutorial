//! aninomas functrion
var addition = function (a, b) {
  return a + b;
};
//addition(10,20);
//console.log(addition(10,20));

setTimeout(function () {
  console.log(`I will show after 5 seconds`);
}, 5000);

var another = addition;
console.log(another(20, 30));
