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

  //!get keyword
  get myradius() {
    return _radius.get(this);
  }
  //!set
  set myradius(v) {
    _radius.set(this, v);
  }
  draw() {
    console.log(`drawing...`);
    console.log(_radius.get(this), _name.get(this));
    _resize.get(this)();
  }
}

let myPriv2 = new MyCircle(20, `Samiul Ajom`);
myPriv2.draw();
myPriv2.myradius = `fgg`;//!ata kora jasche set er jnno
console.log(myPriv2.myradius);//!ata kora jasche get keyword er jnno
