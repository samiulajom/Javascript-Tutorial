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

Squre.prototype = Object.create(Shape.prototype);

Squre.prototype.constructor = Squre;

Squre.prototype.draw = function () {
  console.log(`Draw`);
};

//var s1 = new Squre(45);
var shape = new Shape();
var sqr = new Squre(45, `green`);
//?shape →shape→Object
//? sqr→Square→Object
//? sqr→Square →shape →Object

function Circle() {}
Circle.prototype = Object.create(Shape.prototype);

var crl = new Circle(40);
