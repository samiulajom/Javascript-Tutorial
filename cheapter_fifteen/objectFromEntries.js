let obj = {
  a: 10,
  b: 20,
  c: 30,
};
//!Object k array te rupantor
//*Entries
console.log(Object.entries(obj)); //(3) [Array(2), Array(2), Array(2)]
//? nicher duita amni khial rkhar jnno likhe rekhesi
//console.log(Object.keys(obj));//(3)// ['a', 'b', 'c']
//console.log(Object.values(obj));//[10, 20, 30]
//!Array k object  a rupantor
let arr = [
  [`a`, 50],
  [`b`, 60],
  [`c`, 70],
];

console.log(Object.fromEntries(arr));
