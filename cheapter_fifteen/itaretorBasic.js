let arr = [1, 2, 3];
// //*for loop diye ische moton iterator kora somvob na .ai jnno nicher way gulo dkha jaite pre
// /*for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }*/
// //!aita custom kore neowa ..Es6 er biltin ta aro nise ase
// /*function myIterator(collectioin) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= collectioin.length,
//         value: collectioin[i++],
//       };
//     },
//   };
// }
// let iterator = myIterator(arr);
// console.log(iterator.next()); //false,1
// console.log(iterator.next()); //false,2
// console.log(iterator.next()); //false,3
// console.log(iterator.next()); //true,undefined*/
// //!aita bilt in
// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next()); //false,1
// console.log(iterator.next()); //false,2
// console.log(iterator.next()); //false,3
// console.log(iterator.next()); //true,undefined
// //*string er jnn
// let str = `TEXT`;
// let iteratorText = str[Symbol.iterator]();
// console.log(iteratorText.next()); //T,false
// console.log(iteratorText.next()); //E,false
// console.log(iteratorText.next()); //X,false
// console.log(iteratorText.next()); //T,false
// console.log(iteratorText.next()); //undefined,false
// //!iterable data k iterate korar jay (for of loop diye)
//*arr
for (let v of arr) {
  console.log(v);
} //1
//2
//3
//*string
for (let v of `Md Samiul Ajom`) {
  console.log(v);
}
//*object k kora jbe na
// let obj2 = {
//   a: 10,
//   b: 20,
//   c: 30,
// };*  +0  --------------------------------------------------------------------------------------------------666REEEEEEEERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERER56556EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE6R6`````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
// for (let v of obj2) {
//   console.log(v);
// }//!error show korbe .karon object k aivbe iterate kora jbe na.object iterable na

