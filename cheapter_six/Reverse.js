var arr = [1, 2, 3, 4, 5];
//!sudu logic bujar jnno
for(var i=0; i<arr.length/2; i++){
    var temp=arr[i];
    arr[i]=arr[arr.length-1-i];
    arr[arr.length-1-i]=temp;

}
console.log(arr);
//!at bilt in vbe sohojei kora jay
// console.log(arr.reverse());
