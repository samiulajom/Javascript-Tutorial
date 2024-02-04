var obj = {
  x: 10,
  y: 20,
  z: 30,
};
//!dot notation
// console.log(obj.x);
// console.log(obj.y);
// console.log(obj.z);
// console.log(obj.x + obj.y);
//! array notation
// console.log(obj[`x`]);
// console.log(obj[``]);
// console.log(obj[`x`] + obj[`y`]);
var show = `x`;
console.log(obj[show]);
//!update
var point = {
  x: 20,
  y: 30,
};
point.x=60;//update x
point[`y`]=90;//update y by arrow
point.b=40;//add a value and property
point.a=10;//add a property and value
var found=`z`;
//point.found=20;//!this is wrong
point[found]=20;
console.log(point);
