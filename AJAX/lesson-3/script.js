function loadData() {
  //!create a new request
  const xhr = new XMLHttpRequest();

  //!what to do when response arrives
  xhr.onload = function () {
    console.log(
      "I ami kno age cll holam na..karon ami asyn. karon akhn amr value true."
    );
    //console.log(
      "ami age cll hoiyesi.karon akhn amy synchronous. amr value false"
    );
    const display = document.getElementById(`demo`);
    display.innerHTML = xhr.responseText;
  };
  //!prepare request-(GET,POST,PUT,PATCH,DELETE,OPTIONS)
  //xhr.open("get", "./info.txt", false);
  xhr.open("get", "./info.txt", true);
  //add response Request .just for basic
  //   xhr.setRequestHeader("My_GF", "Munia");
  //!send request
  xhr.send();
  console.log("hello");
}
