function setSessionStorage(key, value) {
  sessionStorage.setItem(key, value);
}
function getSessionStorage(key) {
  alert(sessionStorage.getItem(key));
}
function removeSessionStorage(key) {
  sessionStorage.removeItem(key);
}
function clearSessionStorage() {
  sessionStorage.clear();
}
