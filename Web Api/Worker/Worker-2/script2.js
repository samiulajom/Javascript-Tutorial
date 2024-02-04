let w;
function startWorker() {
  if (typeof Worker !== `undefined`) {
    //!worker available
    //!if w worker is not already define
    if (typeof w == `undefined`) {
      //!create a new worker
      w = new Worker("worker2.js");
    }

    //lisening for worker events/messages
    w.onmessage = function (event) {
      document.getElementById(`result`).innerHTML = event.data;
    };
  } else {
    alert(`your browser does not supprt web worker.!`);
  }
}

function stopWorker() {
  if (typeof Worker !== `undefined`) {
    w.terminate();
    w = undefined;
  } else {
    alert(`your browser does not supprt web worker`);
  }
}
