//for loops
// intializer mne kothay theke suru korte hobe
/*
for(intializer; Condition; increment/decrement ){

} */

/*
for (var i=0; i<10; i++){
    console.log((i+1)+ ` MD: SAMIUL AJOM`)
    
}*/
/*
for(var i=0; i<100; i++){
    if(i%2==0){
        console.log(i);
    }
}*/
/*
for (var i=0; i<100; i++){
    if(i%2==1){
        console.log(i);
    }
}*/
/*
var sum = 0;
for (var i = 1; i < 10; i++) {
    console.log(sum + `+` + i + `= ` + (sum + i));
  sum += i;
}
console.log(`Result = ` + sum);
*/
var sum = 0;
for (var i = 0; i < 100; i++) {
  if (i % 2 == 0) {
    console.log(sum + `+` + i + `=` + (sum + i));
    sum += i;
  }
}
console.log(`Even number summation Result =`+sum)