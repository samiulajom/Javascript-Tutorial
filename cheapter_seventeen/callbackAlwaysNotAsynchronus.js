let arr = [1, 2, 3, 4];
let sqrArr = arr.map((v) => v * v);
console.log(sqrArr);

//!call back always is not asynchronous
function asyncMap(arr, cb) {
  return arr.map((v) => {
    // setTimeout(cb, 0);//!undefined return korbe 
    // setTimeout(cb.bind(null, v), 0);//*first sollution
    setTimeout(() => cb(v), 0); //*second sollution
  });
}
// let qbArr = asyncMap(arr, (v) => v * v * v);
let qbArr = asyncMap(arr, (v) => {
  console.log(v);
});
console.log(qbArr);
