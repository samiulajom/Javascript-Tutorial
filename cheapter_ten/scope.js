/*{
  var x = 100; //golobal
  function test() {
    var x = 30;
    console.log(x);
  }
  test();
}
console.log(x); //this is accesable
test(); //this is accesable
*/
//!Second
{
  var x = 100; //golobal
  function test() {
    var x = 30;
    console.log(x);
    function nested() {
      var y = 20;
      console.log(x);
    }
    nested();
    //console.log(y);
  }
}
console.log(`global access: `+x); //this is accesable
test(); //this is accesable
