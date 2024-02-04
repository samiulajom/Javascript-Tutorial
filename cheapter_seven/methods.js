var point = {
  a: 10,
  b: 20,
  c: 30,
};

// console.log(Object.keys(point));
// console.log(Object.values(point));
// console.log(Object.entries(point))
//!create another object
// var point2 = point;//! ata kora jbee na .karon ata korle first object tar o value change hoiye jbe
// point2.a=90;
var point2 = Object.assign({}, point);//!this is right way
point2.a = 90;
console.log(point);
console.log(point2);
