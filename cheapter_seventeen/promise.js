/*let p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, `one`);
});
let p2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, `two`);
});
console.log(p1);
console.log(p2);
p1.then((s) => {
  console.log(s);
});//!ata pore show hobe karon time besi deowa ase promise a 

p2.then((s) => {
  console.log(s);
});//!ata age show hobe karon time kom deowa ase promise a */
/*
function getPhone(isPassed) {
  return (promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isPassed) {
        resolve(`I have gat an iphone!😍`);
      } else {
        reject(new Error(`I have failed!😥` ));
      }
    }, 2000);
  }));
}
// console.log(getPhone(true));
getPhone(false)
  .then((s) => {
    console.log(s);
  })
  .catch((e) => {
    console.log(e.message);
  });*/
/*
let p1 = Promise.resolve(`SUCCESS`);
// console.log(p1);
p1.then((v) => {
  console.log(v);
}); //!AKHNE catch lagbe na

let p3 = Promise.reject(`I am your error ONE!`);
p3.catch((err) => {
  console.log(err);
}); //!akhne then lagbe na

let p2 = Promise.reject(new Error(`I am your error!`));
p2.catch((err) => {
  console.log(err);
});*/

/**
 * let p1 = Promise.resolve(`one`);
let p2 = Promise.resolve(`two`);
let p3 = Promise.resolve(`Three`);

let promisArr = [p1, p2, p3];
Promise.all(promisArr).then((arr) => {
  console.log(arr);
});
 */

let p1 = new Promise((resolve) => {
  setTimeout(resolve, 5000, `one`);
});
let p2 = new Promise((resolve) => {
  setTimeout(resolve, 3000, `two`);
});
let p3 = new Promise((resolve) => {
  setTimeout(resolve, 4000, `three`);
});

let promisArr = [p1, p2, p3];
Promise.all(promisArr).then((arr) => {
  console.log(arr);
});
Promise.race(promisArr).then((arr)=>{
    console.log(arr);
})