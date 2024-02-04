async function* myAsynGenartor() {
  let i = 0;
  while (true) {
    if (i > 5) return;
    yield await Promise.resolve(i++);
  }
};
(async function () {
  for await (let v of myAsynGenartor()) {
    console.log(v);
  }
})();
