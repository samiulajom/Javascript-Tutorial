// function add(a, b) {
//   return a + b;
// }
// console.log(add(40,50));//*ata normal way for function declaration

//!ata arro function
let add = (a, b) => {
  return a + b;
}; //*ata akadin line er somoy ba all situation
console.log(add(40, 50));
//!ar jdi ak line er hoy se khetre niser style a declare kora jay
let add2 = (a, b) => a + b;
console.log(add2(45, 50));
//!R jodi akta parameter thake tahole niser tar moto kore declare kora jay
let sqr = (x) => x * x;
console.log(sqr(5));
//!FUNCTION NIYE ARO KISU BISTARITO
// function testMe() {
//   console.log(this);
// }
// testMe();
/*let obj = {
  name: `Samiul Ajom`,
  print: function () {
    console.log(this);
  }, //ata nijesso object ta refer korse
  print2: () => {
    console.log(this);
  }, //ata window k refer korse
};
obj.print();
obj.print2();*/
//! nuser function gulol hote buja jay.arrow function tar parent k refer kore .ar genaral function tar nijer object k reffer kore 
let obj = {
  name: `Samiul Ajom`,
  print: function () {
    // console.log(this.name); //ata valid
    let self = this; //setTime er vitor a valid korte
    setTimeout(function () {
      //console.log(this.name);//atay valid na .tai ata window k refer korse
      console.log(self.name); //abar name valid hobe
    }, 1000);
  },
  print2: () => {
    console.log(this.name); //ata valid na.ata window k refer korse
    setTimeout(function () {
      console.log(this.name);
    }, 1000); //atay valid .tai ata window k refer korse
  },
  print3: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 1000);//!aikhne valid hobe .karon arrow function tr nijer parent k refer kore .ar ai khetre settime a use kora ,arrow function er parent holo tr nijer object
  },
};
//obj.print();
//obj.print2();
obj.print3();
