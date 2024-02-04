var obj1 = {
  a: 10,
  b: 20,
};
var obj2 = {
  a: 10,
  b: 20
};
//!niser ta vul way.
/*if (obj1 === obj2) {
  console.log(true);
} else {
  console.log(false);
}*/
//!ata akta way but recomanded na
if (obj1.a === obj2.a && obj1.b === obj2.b) {
  console.log(true);
} else {
  console.log(false);
}
//! ata sundor abong recomanded way
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));
