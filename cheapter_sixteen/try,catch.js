/*function makeWord(text) {
  try {
    let str = text.trim();
    let words = str.split(` `);
    return words;
  } catch (e) {
    // console.log(e.massage)
     console.log(`plesase provide a valid text.`);
  }
}
// let words = makeWord(`I am a boy`);
let words = makeWord(563);
console.log(words);*/

try {
  console.log(`I am line number 1.`);
  throw new Error(`Hey ! galliboy i am a error!`); //!aikhne error sura hoiye sese.ei jonno ei block er  porer code execution hobe na . catch er code gulo execution hobe
  console.log(`I am line number 3.`);
  console.log(`I am line number 2.`);
} catch (e) {
  console.log(e.message);
}
console.log(`hey! hey! hey! `);
