// function add(x, y) {
//   var result = x + y;
//   console.log(result);
// }
// add(10, 20);
// add(2, 4);
// var arr1 = [1, 2, 3];
// var arr2 = [4, 5, 6];
// var arr3 = [7, 8, 9,233];
//? arr er vitor element gulor jog korte hobe
//!aita kono vlo sollution na
/*var sum1 = 0;
for (var i = 0; i < arr1.length; i++) {
  sum1 += arr1[i];
}
console.log(sum1);
var sum2 = 0;
for (var i = 0; i < arr2.length; i++) {
  sum2 += arr2[i];
}
console.log(sum2);
var sum3 = 0;
for (var i = 0; i < arr3.length; i++) {
  sum3 += arr3[i];
}
console.log(sum3);*/
//! upor er somosssa tir vlo sollution
// function sumOfArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }

// sumOfArray(arr1);
// sumOfArray(arr2);
// sumOfArray(arr3);
//!Argument
// function test() {
//   //   console.log(JSON.stringify(arguments));
//   // console.log(arguments)
//   // console.log(typeof a)
//   for (var i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// // test();
// test(10, 20, 30);
function sumAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
// sumAll(10,20,30);
// sumAll(1,2,3,4,5,6,7,8,9,10)
//var a=sumAll(10,20,30);//!undefined dkhabe. ata k variable a store korte hole return kortbe hobe
//var b=sumAll(1,2,3,4,5,6,7,8,9,10)
//console.log(a,b);//!undefined dkhabe. ata k variable a store korte hole return kortbe hobe