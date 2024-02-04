var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  this.draw = function () {
    console.log(`I am Rectangle`);
    this.printPropeties();
  };
  this.printPropeties = function () {
    console.log(` My width is ` + this.width);
    console.log(` My height is ` + this.height);
  };
};
var rect = new Rectangle(10, 20);
rect.draw();
