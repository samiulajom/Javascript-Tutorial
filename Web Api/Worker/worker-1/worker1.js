let i = 0;
function startWorker() {
  //   for (i; i < 5000000; i++) {
  //     i++;
  //     postMessage(i);
  //     setTimeout(`startWorker()`, 500);
  //   }
  i++;
  postMessage(i);
  setTimeout(`startWorker()`, 500);
}
startWorker();
