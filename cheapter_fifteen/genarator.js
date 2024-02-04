//!genarator . function likhe tr sthe * dite hobe
/*function* mygen() {
  yield 1;
  yield 2;
  yield 3;
}
let it = mygen();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());*/
//!2nd
let arr = [1, 2, 3];
function* mygen(collection) {
  for (let i = 0; i < collection.length; i++) {
    yield collection[i];
  }
}

let it = mygen(arr);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
//!bonus
// console.log(it.next().done);//true
// console.log(it.next().value);//udefined
