// forEach function mul array ta kei update kore fele. seikhne map function mul array k thik rkhey sudu array ta alada vbe update kore 
var arr = [1, 2, 3, 4, 5];
///var sum = 0;
//! javascript এর বিল্ট ইন forEach
//arr.forEach(function (value, index, arr) {
//console.log(value, index, arr);
// sum += value;
//});
//console.log(sum);
//! নিজেদের তৈরি করা
function myFun(arr, cb) {
  for (var i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}
//!Summation array elements value
var sum = 0;
myFun(arr, function (value, index, arr) {
  //console.log(value,index,arr);
  sum += value;
});
console.log(sum);

myFun(arr, function (value, index, arr) {
  arr[index] = value + 5;
});
console.log(arr);
