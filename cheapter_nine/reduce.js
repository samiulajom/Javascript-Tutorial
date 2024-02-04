var arr = [1, 2, 3, 4, 5];
// var sum = arr.reduce(function (prev, curr) {
//   return prev + curr;
// }, 100);
// console.log(sum);//show summation
// var max = arr.reduce(function (prev, curr) {
//   return Math.max(prev, curr);
// }, 0);
// console.log(max);//show maximum value;
//!IMPLEMENTATION BY MYSELF
function myReduce(arr, cb, acc) {
  for (var i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i]);
  }
  return acc;
}
//*show summation by my implementation
var sum = myReduce(
  arr,
  function (prev, curr) {
    return prev + curr;
  },
  0
);
console.log(sum);

//max value
var max = myReduce(
  arr,
  function (prev, curr) {
    return Math.max(prev, curr);
  },
  0
);
//min value
var min = myReduce(
  arr,
  function (prev, curr) {
    return Math.min(prev, curr);
  },
  arr[0]
);
console.log(min);
