//Nested loop

 var n=5;
// for (var i = 1; i <= n; i++) {
//   var result = ``;
//   for (var j = 1; j <= i; j++) {
//     result += j + ` `;
//   }
//   console.log(result);
// }

//! another
// for (var i=1; i<=n; i++){
//   let result=``;
//   for(var j=1; j<=i; j++){
//     result +=  `* `
//   }
//   console.log(result);
// }
//! another

for (var i=1; i<=n; i++){
  let result=``;
  for(var j=1; j<=n; j++){
    result +=  `* `
  }
  console.log(result);
}