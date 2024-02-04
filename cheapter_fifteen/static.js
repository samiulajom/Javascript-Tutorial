class Person {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  print() {
    console.log(this.name, this.email);
  }
  static create(str) {
    let person = JSON.parse(str);
    return new Person(person.name, person.email);
  }
}

let myStr = `{"name": "Samiul Ajom", "email":"samiulajomm@gmail.com"}`;
let p1 = Person.create(myStr);
console.log(p1);
console.log(p1 instanceof Person);
p1.print();
