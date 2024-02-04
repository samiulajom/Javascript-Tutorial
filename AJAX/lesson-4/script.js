function loadData() {
  //create a new request
  const xhr = new XMLHttpRequest();

  //what to do when response arrives
  xhr.onload = function () {
    const display = document.getElementById(`demo`);
    display.innerHTML = xhr.responseText;
    //!aiter madoome paowa jbe response header gulo
    //console.log(this.getAllResponseHeaders());
    console.log(this.getResponseHeader("etag"));
  };
  //prepare request-(GET,POST,PUT,PATCH,DELETE,OPTIONS)
  xhr.open("get", "./info.txt");
  //add response Request .just for basic
  //   xhr.setRequestHeader("My_GF", "Munia");
  //send request
  xhr.send();
}
