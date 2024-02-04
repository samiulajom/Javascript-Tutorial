//parent instance member.ata prototype er vitor er acces pabe
function Squre(width) {
  this.width = width;
  // this.draw()//access form prototype theke
}
//prototype instance member .ata parent er access pabe
Squre.prototype = {
  draw: function () {
    console.log(`Draw`);
  },
  toString: function () {
    return `My width is ` + this.width;
  },
};

var sqr1 = new Squre(10);
var sqr2 = new Squre(5);
//!console.log(Object.keys(sqr1)); //sudu nijer property gulo dkhabe,child er gulo dkhabe na

for (var i in sqr1) {
  console.log(i);
}//!ata sob gulo property dkhabe
