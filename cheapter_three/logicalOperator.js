//! LOGICAL OPERATOR
//*AND(&&), OR(||), NOT(!)
//? A && B
//true && true =true
// true && false= false
// false && true =false
// false && false =false
// sob guloi stto hote hobe

//? A || B
//true && true =true
// true && false= true
// false && true =true
// false && false =false
// kom pokhe akti holeo stti hote hobe
//? !A
// VALUE K INVERT KORE DIVE
var a = 10;
var b = 20;
var c = 50;
var d = 40;
if (a<b && c<d){
    console.log(`a is less than b AND c is less than d`);
}else{
    console.log(`at least one condition is false`)
}
//? AND (&&) 
let x = 10,
  y = 10;
//duiti sorthoi stti hole anser hobe true akti value sorter sthe na mille anser hobe false

if (x === 10 && y === 10) {
  console.log(`true`);
} else {
  console.log(`false`);
}

//!==========OR====
if (a<b || c<d){
    console.log(`At least on condition is true`);
}else{
    console.log(`at least one condition is false`)
}
//? or (||) 
//kompokhe akti sorthoi stti hole anser hobe true ,sob gulo value sorter sthe na mille anser hobe false
if (x === 10 || y === 9) {
    console.log(`true`);
  } else {
    console.log(`false`);
  }
//! ========!=======
var check= !(a<b)
console.log(check);



/*NOT (!) */
let z = true;
console.log(!z); //invert value of the z bollean variable to false
console.log(5+"10")