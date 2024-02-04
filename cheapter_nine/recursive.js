//! i am calling 10 bar print koro for loop use na kore
// function myRec(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(`I am calling ... `);
//   myRec(n - 1); //!nijei nije k call korese
// }
// myRec(10);
//! summation ber koro
function sum(n) {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
}
console.log(sum(5));
//!factorial
function fact(n) {
  if (n === 1) {
    return 1;
  }
  return n * fact(n - 1);
}
console.log(fact(5));
//!arry elements valu summation
var arr = [1, 2, 3, 4, 5];
function sumArray(arr, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return arr[lastIndex] + sumArray(arr, lastIndex - 1);
}
console.log(sumArray(arr, arr.length - 1));
