//!object to json
//Use the JavaScript function JSON.stringify() to convert it into a string.
const obj = {
  name: "John",
  age: 30,
  city: "New York",
};
//*convert object to json string
const myJson = JSON.stringify(obj);
console.log(myJson);
//!ARRAY TO JSON
const arr = ["John", "Peter", "Sally", "Jane"];
const myArr = JSON.stringify(arr);
console.log(myArr);

//! Storing data:

const myObj = {name: "John", age: 31, city: "New York"};
const myJSON = JSON.stringify(myObj);
localStorage.setItem("mytry", myJSON);

// Retrieving data:
let text = localStorage.getItem("mytry");
let obj4 = JSON.parse(text);
document.getElementById("demo").innerHTML = obj4.name;
//!Exceptions
//date dile seta k string a convert kore flebe .pre take parse kore bebohar korte hobe
const obj5 = {name: "John", today: new Date(), city : "New York"};
const myJSON2 = JSON.stringify(obj5);
console.log(myJSON2);




//*function

//*function deowar way ase tob a ata na use korai vlo
const obj9 = {name: "John", age: function () {return 30;}, city: "New York"};
console.log(obj9);
a = obj9.age.toString();
console.log(a);
const myJSON9 = JSON.stringify(obj9);
console.log(myJSON9);