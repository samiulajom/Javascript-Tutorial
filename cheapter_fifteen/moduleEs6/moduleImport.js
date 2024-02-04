// import { newMassage } from "./moduleExport.js";
// console.log(newMassage);
// import { name } from "./moduleExport.js";
// console.log(name);
import Shape from "./module_Export.js";
class Regtangle extends Shape {
  constructor(color, width, height) {
    super(color); //!super k dara call korte hobe
    this.width = width;
    this.height = height;
  }
  draw() {
    console.log(`Drawing a Rectangle`);
  }
  calculate() {
    return this.width * this.height;
  }
}
let p1 = new Regtangle(`green`, 5, 10);
console.log(p1); //Regtangle {color: 'green', width: 5, height: 10}
console.log(p1.calculate()); //50
p1.draw(); //Drawing a Rectangle
