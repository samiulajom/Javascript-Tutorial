// let a = { a: 10 },
//   b = { b: 20 };
// // let mySet = new Set([a, b]);
// // a = null;
// // console.log(mySet);
// // let arr = [...mySet];
// // console.log(arr[0]);
// // console.log(arr[1]);
// //?weakset a object e deowa jbe sudu
// let myWeak = new WeakSet([a, b]);
// a = null;

// console.log(myWeak);
//!weakmap
let myMap = new WeakMap([
  [a, 10],
  [b, 20],
  [c, 30],
]);
console.log(myMap);//! i donot kow uncaught reference error

