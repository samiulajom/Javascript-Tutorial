// const _radius = Symbol();//aivbe likhe vitor eo oivbe likhe private kora hoy data..jate baire theke ake access neowa na jay
// //!sadaronot ainiyom a private kora hoy
// const _name = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius, name) {
//     this[_radius] = radius;
//     this[_name] = name;
//   }
//   [_draw]() {
//     console.log(`drawing...`);
//   }
// }
// let myPriv = new Circle(20, `sam`);
// console.log(myPriv)
//?niser weakmap diyeo private kora jay
const _radius = new WeakMap();
const _name = new WeakMap();
const _resize = new WeakMap();
class MyCircle {
  constructor(radius, name) {
    this.size = 100;
    _radius.set(this, radius);
    _name.set(this, name);
    _resize.set(this, () => {
      console.log(this.size);
    });
  }
  draw() {
    console.log(`drawing...`);
    console.log(_radius.get(this), _name.get(this));
    _resize.get(this)();
  }
}

let myPriv2 = new MyCircle(20, `Samiul Ajom`);
myPriv2.draw();
