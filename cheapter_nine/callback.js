function sample(a, b, func) {
  var c = a + b;
  var d = a - b;
  var result = func(c, d);
  return result;
}
function sum(a, b) {
  return a + b;
}
var result = sample(5, 3, sum); //function a argument akare diye
console.log(result);
//!second
var result2 = sample(5, 3, function (c, d) {
  //jekhne ishce function declare kora jay
  return c - d;
});
console.log(result2);
//!third
var result3 = sample(5, 3, function (c,d) {
  return c * d;
});
console.log(result3);
