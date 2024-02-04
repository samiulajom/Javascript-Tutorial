var Rectangle = function (width, height) {
  this.width = width;
  this.height = height;
  var position = {
    x: 100,
    y: -34,
  };
  //!jodi private korte chai . 1wary:
  //   var printPropeties = function () {
  //     console.log(` My width is ` + width);
  //     console.log(` My height is ` + height);
  //   };
  //!jodi private korte chai . 2wary:
  var printPropeties = function () {
    console.log(` My width is ` + this.width);
    console.log(` My height is ` + this.height);
  }.bind(this);
  //!ar jdi baire theke private object k access korte chai .thable 2ta way ase 1st way
  // this.getposition = function () {
  //   return position;
  // };

  this.draw = function () {
    console.log(`I am Rectangle`);
    printPropeties();
    console.log(`Position is ` + position.x + ` and ` + position.y + ` .`);
  };
  //!ar jdi baire theke private object k access korte chai .thable 2ta way ase 2nd way:
  Object.defineProperty(this, "position", {
    get: function () {
      return position;
    },
    //?r value set krote
    set: function (value) {
      position = value;
    },
  });
};
var rect = new Rectangle(40, 50);
rect.draw();
//console.log(rect.position); //undefined;
//rect.printPropeties(); //uncaght error
//!private korar poreo access pete .first wary er jnno
//console.log(rect.getposition()); //object show
//!private korar poreo access pete .second wary er jnno
console.log(rect.position);
//!ar jdi value cng korte chai
rect.position = {
  x: 500,
  y: -123,
};
console.log(rect.position);