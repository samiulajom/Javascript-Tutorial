function myFun() {
  console.log(this); //Window
  console.log(this.a + this.b);
}
//!bind
myFun.bind({ a: 10, b: 20 }); //no output . karon bind sudu dore rekhe. ake ouput korte hole take age variable a store kore er por call korte hobe
var myBind = myFun.bind({ a: 10, b: 20 });
myBind(); //object ,30

//!call ,apply
//myFun(); //Window,NAN
//myFun.call();//window,NaN 
//myFun.call({})//Object,NaN
//myFun.call({a:10,b:20})//Object,30
//myFun.apply();//Window,NaN
// myFun.apply({})//object,NaN
// myFun.apply({a:10,b:20})//object,30
function myFun2(c, d) {
  console.log(this); //Window
  console.log(this.a + this.b + c + d);
}
//myFun2(); //error
//myFun2.call();//window,NaN
//myFun2.call({})//Object,NaN
//myFun2.call({a:10,b:20})//Object,Nan (because undefined+undefined=NaN)
//myFun2.apply();//Window,NaN
// myFun2.apply({})//object,NaN
//myFun2.apply({a:10,b:20})//object,NaN(because undefined+undefined=NaN)
//!right way
//*apply er somoy prothom a object, abong pore array er vitor arguments value dite hbe
//myFun2.apply({ a: 10, b: 20 },[5,10]);//Object ,45
//* call er somoy prothom a object pore value dite hobe
//!Bind
//*1way:
//myFun2.call({ a: 10, b: 20 }, 5, 10);
//bind
//*2 way
var myBind2 = myFun2.bind({ a: 10, b: 20 });
myBind2(5, 10); //object,45
