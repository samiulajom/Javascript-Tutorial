function back() {
  window.history.back();
}
function forward() {
  window.history.forward();
}
function backTo(n) {
  window.history.go(n);
}

function getHistory() {
  alert(window.history.length);
}
