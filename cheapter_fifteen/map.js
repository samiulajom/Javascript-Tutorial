//!set er khetre duplicate data rkha na geleo .map er khetre rkha jay
let myMap = new Map([
  [`a`, 10],
  [`b`, 20],
  [`c`, 30],
]);
myMap.set(`d`, 40); //d a 40 add korbe
//?chile object o deowa jay
myMap.set({ name: `samiul ajom` }, 45);
//myMap.delete(`c`); //c k delete korbe
//myMap.clear()//clear kore dibe puro map k
//console.log(myMap.has(`b`))//true
//console.log(myMap.size);
//console.log(myMap.keys())//MapIterator {'a', 'b', 'd'}
//console.log(myMap.entries())//MapIterator {'a' => 10, 'b' => 20, 'd' => 40}
console.log(myMap);
for (let [v,k] of myMap) {
  console.log(k,v);
}
myMap.forEach((v, k) => {
  console.log(k, v);
});
