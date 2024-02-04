var obj = {
  a: 10,
  b: 20,
  z: 30,
};
// obj.a=undefined;//!there is a problem
// obj.a=null;//there is a problem
delete obj.a;//!Good way
console.log(obj);
