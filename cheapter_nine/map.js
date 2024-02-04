//? forEach function mul array ta kei update kore fele. seikhne map function mul array k thik rkhey sudu array ta alada vbe update kore
//javascript bilt in
var arr = [1, 2, 3,4,5];
/*var sqr = arr.map(function (value) {
  //return Math.random() * 100;
  return value * value;
});
console.log(arr);
console.log(sqr);
*/
function myMap(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    //var temp = arr[i] * arr[i];
    var temp = cb(arr[i], i, arr);
    newArr.push(temp);
  }
  return newArr;
}
// console.log(arr);
// console.log(myMap(arr));
//! value qube
var qub = myMap(arr, function (value) {
  return value * value * value;
});

//! value 10 multiplication
var mten = myMap(arr, function (value) {
  return value * 10;
});
console.log(arr);
console.log(qub);
console.log(mten);
