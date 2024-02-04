let href = document.getElementById(`href`);
let hostname = document.getElementById(`hostname`);
let pathname = document.getElementById(`pathname`);
let protocol = document.getElementById(`protocol`);

href.innerHTML = `<span>LOCATION OF href:</span> ` + location.href;
hostname.innerHTML = `<span>Location of hostname:</span> ` + location.hostname;
pathname.innerHTML = `<span>Location of pathname:</span> ` + location.pathname;
protocol.innerHTML =
  `<span>location of protocol:</span>   ` + location.protocol;

function openWebLink() {
  location.assign("https://www.w3schools.com/js/js_window_location.asp");
}
