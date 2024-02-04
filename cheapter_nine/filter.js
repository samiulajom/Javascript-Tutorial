var arr = [4, 6, 9, 8, 3, 5, 7, 1, 2];

// var filterArray = arr.filter(function (value) {
//   //   return value % 2 === 0;
//   return value > 4;
//   //return value < 4;
// });
// console.log(filterArray);
//!nije der implement kora
function myFilter(arr, cb) {
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

//*show even number
console.log(
  myFilter(arr, function (value) {
    return value % 2 == 0;
  })
);
//*show odd number
console.log(
  myFilter(arr, function (value) {
    return value % 2 === 1;
  })
);
// show grater than 4 number
console.log(
  myFilter(arr, function (value) {
    return value > 4;
    
  })
);
