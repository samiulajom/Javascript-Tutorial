function Shape() {}

Shape.prototype.common = function () {
  console.log(`I am common Method`);
};

function Squre(width) {
  this.width = width;
}

Squre.prototype = Object.create(Shape.prototype);
//!JOKHN E PROTOTOTYPE KORBO .TOKHN ER RESET KORE DITE HOBE
Squre.prototype.constructor = Squre;

Squre.prototype.draw = function () {
  console.log(`Draw`);
};

//var s1 = new Squre(45);
var shape = new Shape();
var sqr = new Squre(45);
//?shape →shape→Object
//? sqr→Square→Object
//? sqr→Square →shape →Object

// function Circle() {}
// Circle.prototype = Object.create(Shape.prototype);

// var crl = new Circle(40);
