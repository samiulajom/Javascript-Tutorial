let TimeOut = document.getElementById(`TimeOut`);
let clearInter = document.getElementById(`clearInter`);

let myTime;
let myInterval;
function startTimeOut() {
  myTime = setTimeout(function () {
    TimeOut.innerHTML = ` 3 second over .you can stop by clearTimeout by compelete me!`;
  }, 3000);
}

function stopTimeout() {
  clearTimeout(myTime);
}

function startInterval() {
  myInterval = setInterval(function () {
    clearInter.innerHTML = new Date().toLocaleTimeString();
  }, 1000);
}

function StopInterval() {
  clearInterval(myInterval);
}
