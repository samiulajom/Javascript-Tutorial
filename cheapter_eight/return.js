function sumAll() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
//!aivbe  return kore varibale a store kora jbe
var a = sumAll(10, 20, 30);
var b = sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(a, b);


function person(name, email){
return{
    name: name,
    email:email
}
console.log(` I will never show.`)//!return er pore kono code likhle ta  kaj korbe na
}
var c=person(`Samiul Ajom`, `samiulajom@gmail.com`);
console.log(c);// return object