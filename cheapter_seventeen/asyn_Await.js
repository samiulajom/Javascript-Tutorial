// function myPromise(){
//     return Promise.resolve(`Test value`)
// }
// console.log(myPromise())
//!asyn
/*
 async function test() {
  return `Test`;
}
// console.log(test());
test().then((v) => alert(v));
 */
// let p1 = Promise.resolve(`I am a promise`);
// let p1 = new Promise((resolve) => {
//   setTimeout(resolve, 5000, `Test value`);
// });
// async function myAsynFun() {
//   //   p1.then((v) => alert(v));
//   let v = await p1;
//   console.log(v);
//   console.log(`testing purpose`);
// }
// myAsynFun();
//!fetch
// async function fetchData() {
//   let res = await fetch("https://jsonplaceholder.typicode.com/users");
//   //   console.log(res.json());
//   let data = await res.json();
//   let names = data.map((u) => u.name);
// //   console.log(data);
//   console.log(names)
// }
// fetchData();
//!fetch ,error
// async function fetchData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/users");
//     //   console.log(res.json());
//     let data = await res.json();
//     let names = data.map((u) => u.name);
//     //   console.log(data);
//     console.log(names);
//   } catch (err) {
//     console.log(e.message);
//   }
// }
// fetchData();
//!multiple promise
let promises = [Promise.resolve(1), romise.resolve(2), romise.resolve(3)];
async function promiseAll() {
  let result = await Promise.all(promises);
  console.log(result);
}
promiseAll();
