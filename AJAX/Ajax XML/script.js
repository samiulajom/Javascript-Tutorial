function loadData(callbackFun) {
  //!create a new request
  const xhr = new XMLHttpRequest();

  //!what to do when response arrives
  xhr.onload =function(){
    callbackFun(this);
  };
  
  //!prepare request-(GET,POST,PUT,PATCH,DELETE,OPTIONS)
  xhr.open("get", "./info.txt");
  //add response Request .just for basic
  //   xhr.setRequestHeader("My_GF", "Munia");
  //!send request
  xhr.send();
}
function myCallFun1(xhr) {
  const display = document.getElementById(`demo`);
  display.innerHTML = xhr.responseText;
}

function myCallFun2(xhr) {
  const display = document.getElementById(`demo2`);
  display.innerHTML = xhr.responseText;
}
