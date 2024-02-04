var a = 11;
function A() {
  var b = 12;
  function B() {
    var c = 23;
    console.log(c);
  }
  function C() {
    var d = 24;
    console.log(d);
  }
  console.log(b);
  D(b);
  B();
  C();
}
A();

function D(n) {
  return n + a;
}
console.log(D(a));
//!Scope
//A→ a,b,c,B(),C(),D()
//B→a,b,c,C(),D()
//C→a,b,d,B(),D()
//D→a,n,A(),
