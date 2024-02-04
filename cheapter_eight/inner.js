//! akta function er vitor arek ta function thakle thake inner function bole.
/*function something(greet, name) {
  function sayHi() {
    console.log(greet, name);
  }
  sayHi()
}
something(`Good Morning`, `Samiul`);*/
function something(greet, name) {
  function getFirstName() {
    if (name) {
      return name.split(` `)[0];
    } else {
      return ` `;
    }
  }
  var message = greet + ` ` + getFirstName();
  console.log(message);
}
something(`Good morning`, `Munia Rahman`);
