let arr = [4, 23, 3, 6, 7, 8, 1, 9, 42];
//nijer gulo dimnamic poddoti na.ba good way na
// arr[0];
// arr[1];
// arr[3];
// arr[4];
// arr[5];
// arr[6];
//*arr[arr.length-1];//that is good  logical
//? for travasing line by line
/*for (var i=0; i<arr.length; i++){
    console.log(arr[i]);
}*/
//? jdi bole array er item gulor sthe 2 jog koro
/*for(var i=0; i<arr.length; i++){
    arr[i]+=2;

}
console.log(arr);*/
//? arry er item er jogfol
/*var sum=0;
for(var i=0; i<arr.length; i++){
   sum+=arr[i];
}
console.log(sum);*/
//?jdi ble array er even number gulo ber korte;
/*for (var i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
      console.log(arr[i]);
}
}*/
//?even number gulor jog
/*var jog=0;
for(var i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        jog+=arr[i];
    }
}
console.log(jog);*/

//?jodi bole odd number ber kore tar jogfol ber korte;
var Sum=0;
for(var i=0; i<arr.length; i++){
    if(arr[i]%2==1){
        Sum+=arr[i];
    }
}
console.log(Sum);
