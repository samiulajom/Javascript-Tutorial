let w;

function startWorker() {
  if (typeof w == "undefined") {
    //worker available
    //create a new worker
    w = new Worker("worker1.js");
  }
  w.onmessage = function (event) {
    document.getElementById("result").innerHTML = event.data;
  };
}
startWorker();
//for stop
function stopWorker() {
  w.terminate();
  w = undefined;
}
