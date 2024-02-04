// var rect = {
//   width: 100,
//   height: 50,
//   draw: function () {
//     console.log(`I am Rectangle`);
//     this.printPropeties();
//   },
//   printPropeties: function () {
//     console.log(` My width is ` + this.width);
//     console.log(` My height is ` + this.height);
//   },
// };
// rect.draw();
//!Factory pattern
var another = function (width, height) {
  return {
    width: width,
    height: height,
    draw: function () {
      console.log(`I am Rectangle`);
      this.printPropeties();
    },
    printPropeties: function () {
      console.log(` My width is ` + this.width);
      console.log(` My height is ` + this.height);
    },
  };
};
var rect1 = another(10, 8);
rect1.draw();
var rect2 = another(400, 500);
rect2.draw();
