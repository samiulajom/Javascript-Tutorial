function extand(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype);

  Child.prototype.constructor = Child;
}
function Shape(color) {
  this.color = color;
}

Shape.prototype.common = function () {
  console.log(`I am common Method`);
};

function Squre(width, color) {
  Shape.call(this, color); //!super call
  this.width = width;
}

extand(Shape, Squre);

Squre.prototype.draw = function () {
  console.log(`Draw`);
};

//var s1 = new Squre(45);
var shape = new Shape();
var sqr = new Squre(45, `green`);
//?shape →shape→Object
//? sqr→Square→Object
//? sqr→Square →shape →Object

function Circle(radius, color) {
  Shape.call(this, color);
  this.radius = radius;
}
extand(Shape, Circle);

var crl = new Circle(40, `red`);
