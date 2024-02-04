//!Destructuring
let person = {
  name: `Md Samiul Ajom`,
  emaill: `mdsamiulajomm@gmail.com`,
  address: {
    city: `konabari`,
    Country: `Bangladesh`,
  },
};
//!aita old way
// let name = person.name;
// let emaill = person.emaill;
// let city = person.address.city;
// console.log(name, emaill, city);
//!aita es6 er way
let {
  name,
  emaill,
  address,
  address: { city, Country },
} = person;
console.log(name, emaill, address, city, Country);
//!Array destructuring
let arr = [1, 2, 3, 4, 5];
let [first, second, , , last] = arr;
console.log(first, second, last);
