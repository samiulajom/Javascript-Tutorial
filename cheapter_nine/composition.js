//!jokhn akti function er argument akare arekti function er result bebohar hoy.tokhn oi function tike composition function bole
function myPrint(inp) {
  console.log(inp);
}
function multiByFive(n) {
  return n * 5;
}
function add(a, b) {
  return a + b;
}
myPrint(multiByFive(add(5, 3))); // akhne add function er resut multiByFive function er argument hisebe bebohar hoise. abon multipleByFive er result print function er argument hisebe bebohar hoiyese
