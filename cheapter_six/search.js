//!ata  logic bujar jnno
let arr = [1, 2, 3, 4, 56, 67, 76, 85, 10];
let found = 4;
let isFound = false;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === found) {
    console.log(`Data is found & index of ` + i);
    isFound = true;
    break;
  }
}
if(!isFound){
    console.log(`Data is not found`);
}