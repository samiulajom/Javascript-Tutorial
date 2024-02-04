//!ata valo way
// function sqr(n = 0) {
//   return n * n;
// }
// //console.log(sqr(5));
// console.log(sqr());
//! but default parameter deoar somoy khial rkhte hobe, amn kisu jni oita diye kora na hoy.jate error khete hoy( jmn length)

function wish(name = `Samiul`, msg) {
  console.log(`${msg}! ${name}`);
  //console.log(name.length)
}
wish(undefined, `Hello`); //Hello!Samiul 6
wish(null, `Hello`); //Hello!null error

