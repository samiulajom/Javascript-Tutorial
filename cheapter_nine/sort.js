var persons = [
  { name: `A`, age: 29 },
  { name: `B`, age: 26 },
  { name: `C`, age: 21 },
  { name: `D`, age: 30 },
];
var arr = [-4, 2, 8, 1, 3, -2, 6, 7, 5, -9, 3, 9, 2, 4];
// arr.sort();//ata sudu donattok sokhake sort korte prse sothik vbe
// console.log(arr);
// persons.sort();
// console.log(persons);
//!implemantation
arr.sort(function (a, b) {
  if (a > b) {
    // return 1;
    return -1; //boro to soto
  } else if (a < b) {
    // return -1;
    return 1; //boro to soto
  } else {
    return 0;
  }
});
console.log(arr);
//!implementation
persons.sort(function (a, b) {
  if (a.age > b.age) {
    //return 1;//sto to boro
    return -1;
  } else if (a.age < b.age) {
    //return -1;//soto to boro
    return 1;
  } else {
    return 0;
  }
});

console.log(persons);
//! every
//*sob gulo velur jnno ai sorot stto kina.
var arr2 = [2, 3, 4, 5, 6, 7, 8];
var res1 = arr2.every(function (value) {
  return value >= 0; // sob gulo sokhba donattok kina;
});
console.log(res1);
var res2 = arr2.every(function (value) {
  return value % 2 === 0; //sob gulo jor sokha kina
});
console.log(res2);
//!something
//*onto to aktar jnno holeo stto kina
var arr3 = [-1, 1, 2, 3, 4, 5, 6, 7, 8];
var res4 = arr3.some(function (value) {
  return value < 0;//onto to akta holeo negetive hobe
});
console.log(res4);