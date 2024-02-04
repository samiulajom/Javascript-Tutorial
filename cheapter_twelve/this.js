//(this) j object a bebohar kora hobe sei object kei sob somoy refer korbe
//kono object betito je kono jaigay (this) bebohar korle , se window object kei refer korbe
//jekhne this bebohar kora hobe exicution muhurte se value tai pave

var rect = {
  width: 100,
  height: 50,
  draw: function () {
    console.log(`I am Rectangle`);
    //   console.log(` My width is ` + this.width); //!nijer object er properti access korte (this) keyword use korte hobe
    //   console.log(` My height is ` + this.height);
    this.printPropeties();
  },
  printPropeties: function () {
    console.log(` My width is ` + this.width);
    console.log(` My height is ` + this.height);
  },
};
//rect.draw();
// rect.height = 200;
// rect.draw();

rect.printPropeties();
2;

function myFun() {
  console.log(this);//window object 
  rect.printPropeties;
}
new myFun()//object 

var another = {
  width: 20,
  height: 40,

  print: rect.printPropeties,
  //ai khetre kaj kober ai jaigar width and height
  // print2: rect.printPropeties(), //aikhetre kar kobe react er properties vaue
};
another.print();
