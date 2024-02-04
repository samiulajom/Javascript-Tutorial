//!OBject as JSON
const jsonStr = '{"name":"John", "age":30, "city":"New York" ,"address":true}';
console.log(jsonStr); //STRING DIBE
//?convert to valid object
const myObj = JSON.parse(jsonStr);
console.log(myObj); //return a object
console.log(myObj.name);
//!Array as JSON
const text = '["Ford", "BMW", "Audi", "Fiat"]';
console.log(text); //string rturn korbe
//?convert to valid Array
const myArray = JSON.parse(text);
console.log(myArray); //ARRAY RETURN KORBE
//!Exceptions
//jodi date dite chai .tahole niser way te dite hobe
const text2 = '{"name":"John", "birth":"2001-09-21", "city":"New York"}';

const obj = JSON.parse(text2);

// const myBirth = new Date(obj.birth);
// console.log(myBirth);
//?short a
console.log(`my birth day is: ` + new Date(obj.birth));
//!jodi o function deowa jay na json er vitor .tobu parser vitor function deowa jay.jeta k reviar function bola hoy

const text3 = '{"name":"John", "birth":"2001-09-21", "city":"New York"}';

const myBirth2 = JSON.parse(text3, function (key, value) {
  if (key == "birth") {
    console.log(new Date(value));
  }
  return value;
});
