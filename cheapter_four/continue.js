/* continue bebohar a mile gele loop er mile jaoer jaigay lekha ta replace hobe abong loop contiue cholbe*/
//!one example
/*for (var a = 0; a < 10; a++) {
    if (a == 5) {
      console.log("loop contine");
      continue;
    }
    console.log(a);
  }*/
//!example-2
for (var i = 0; i < 10; i++) {
  if (i == 3 || i == 7) {
    console.log(`skip`)
    continue;
  } else {
    console.log(i);
  }
}
