var arr = [
  [70, 80, 90, 96],
  [65, 86, 89, 60],
  [69, 90, 67, 90],
];
// console.log(arr[0][0]);
// console.log(arr[][0]);
/*for (var i=0; i<arr.length; i++){
    console.log(arr[i]);
}*/
//To dimensinal 
for (var i = 0; i < arr.length; i++) {
  for (var j = 0; j < arr[i].length; j++) {
    console.log(`Element ` + i + `:` + arr[i][j]);
  }
}
