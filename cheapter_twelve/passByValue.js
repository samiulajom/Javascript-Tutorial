var n = 10;
function change(n) {
  n = n + 100;
  console.log(n);
}
change(n);
console.log(n); //!aita te value change hbe na

var obj = {
  a: 10,
  b: 20,
};
function changeMe(obj) {
  obj.a = obj.a + 200;
  obj.b = obj.b + 200;
  console.log(obj);
}
changeMe(obj);
console.log(obj); //!Aikhne object er value change hoiye jabe
 