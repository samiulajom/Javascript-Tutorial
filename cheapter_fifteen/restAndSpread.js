//!jokhn amra(...) k kono function er parameter hidebe bebohar kori tokhn ta rest operator. ar ata function er sob gulo argument er ses a decalare korte hoye
//* ar function bade jekhne(...)use kori tokhn ta spread operator
//!REST
/*function add(...sum) {
  return sum.reduce((a, b) => a + b);
}
console.log(add(1, 2, 3, 4, 5, 6, 7));
//?2nd
function myBio(name, age, ...other) {
  return other;
}
console.log(myBio(`samiul`,`23`,`student`,`love you munia`,`coding`))// ['student', 'love you munia', 'coding']*/
//!Spread
let a = [1, 2, 3];
//console.log(a)//[1,2,3]
//console.log(...a)// 1 2 3
let obj = {
  a: 10,
  b: 20,
  c: 30,
  d: 40,
};
let obj2 = {6
  ...obj,
};
console.log(obj2)//{a: 10, b: 20, c: 30, d: 40}


//?2nd
const myName = ["Sofela", "is", "my"];
const aboutMe = ["Oluwatobi", ...myName, "name."];

console.log(aboutMe);
 ['Oluwatobi', 'Sofela', 'is', 'my', 'name.']