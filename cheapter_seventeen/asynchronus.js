console.log(` I AM LINE ONE.`);
setTimeout(() => {
  console.log(` I AM LINE two.`);
}, 5000);

setTimeout(() => {
  console.log(` I AM LINE three.`);
}, 2000);

console.log(` I AM LINE four.`);
setTimeout(() => {
  console.log(` I AM LINE five.`);
}, 0);
//!output
/** I AM LINE ONE.
  I AM LINE four.
  I AM LINE five.
  I AM LINE three.
 I AM LINE two. */
