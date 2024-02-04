var obj = {
  a: 10,
  b: 20,
  c: 40,
};
//console.log(`string` in objectName)//? syntax
// console.log(`a` in obj); // in operator and return true
 //console.log(`x` in obj);// x nai so return false
for (var i in obj) {
  // console.log(i);//a,b,c
  //console.log(i + `:` + obj[i]);
}
