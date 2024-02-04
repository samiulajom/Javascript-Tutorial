// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   draw() {
//     console.log(`Drawing...`);
//   }
// }

// let rect = new Rectangle(45, 50);
// // rect.draw();
// console.log(rect);
// console.log(typeof Rectangle);
//!CONSTRUCTOR ER BAIRE PROPERTY NEOWA
//*niche constructor er baire property(name,test) neowa hoiyese.jekhne test akti function .aivbe constuctor er baire property nile .ta property te jbe
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  name=`samiul ajom`
  draw() {
    console.log(`Drawing...`);
  }
  test = function () {
    console.log(`Hello world`);
  };
}

let rect = new Rectangle(45, 50);
// rect.draw();
console.log(rect);
console.log(typeof Rectangle);
