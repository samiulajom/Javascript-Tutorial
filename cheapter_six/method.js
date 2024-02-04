var arr = [4, 5, 6, 7];
var arr2 = [1, 2, 3];
// console.log(arr);
//console.log(arr.join(` `))//Separator ta bole dite hbe
//console.log(arr.join(`|`))
//console.log(arr.join(` + `))
/*arr.fill(`samiul`);
console.log(arr)*/
/*var arr3 = arr2.concat(arr);
console.log(arr3);*/
//console.log(Array.isArray(arr));// asolei array kina
var arr4=Array.from(arr2);
console.log(arr4);

var arr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Math.max(...arr8));