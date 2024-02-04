function Person(name) {
  this.name = name;
}
Person.prototype.PI = 3.1416;
 var p1 = new Person(`Md samiul ajom`);
// console.log(Object.keys(p1));
// console.log(Object.getPrototypeOf(p1));
// console.log(Person.prototype);
