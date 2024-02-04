var arr = [4, 5, 6, 7, 8, 9, 1, 2, 3];
//!it will be search value
// var result = arr.find(function (value) {
//   return value === 9;
// });
// console.log(result);
//!it will be return value index number
// var result2 = arr.findIndex(function (value) {
//   return value === 9;
// });
// console.log(result2);
//!Implementation find

function myFind(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return arr[i];
    }
  }
}
var result3 = myFind(arr, function (value) {
  return value === 9;
});
console.log(result3);
//! implementation findIndex

function myFindIndex(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      return i;
    }
  }
}
var result4 = myFindIndex(arr, function (value) {
  return value === 9;
});
console.log(result4);