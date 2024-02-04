let display = document.getElementById("display");
// function myFetch() {
//   //!ata sudu response disce
//   //   fetch("./info.txt").then((res) => console.log(res));
//   fetch("./info.txt")
//     // .then((x) => x.json())
//     .then((x) => x.text())
//     .then((y) => (display.innerHTML = y))
//     .catch((e) => console.log(e.message));
// }

//!ata asyn function er maddome..tob a upor er tai amra use korbo

async function myFetch(URL) {
  let myObj = await fetch("http://127.0.0.1:5500/Web%20Api/Fetch%20Api/info.txt");
  let myData = myObj.json();
  display.innerHTML = myData;
}
