const display = document.getElementById(`display`);

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition, showError);//!ata sudu click kora somoy er location dkhabe.
    //navigator.geolocation.watchPosition(showPosition, showError);//!ata  live dkhabe ..ortat jaiga poritborton korle.loaction o sthe sthe poriborton hobe
  } else {
    display.innerHTML = `Gelo locaiton is not available in your browser.`;
  }
}

function showPosition(position) {
  display.innerHTML =
    "Latitude:" +
    position.coords.latitude +
    "<br />longitude:" +
    position.coords.longitude;
}

function showError(e) {
  //   display.innerHTML = e.message;
  switch (e.code) {
    case e.PERMISSION_DENIED:
      display.innerHTML = "User denied the request for Geolocation .";
      break;
    case e.POSITION_UNAVAILABLE:
      display.innerHTML = `Location information is unavailable.`;
      break;
    case e.TIMEOUT:
      display.innerHTML = `The request to get user location timed out.`;
      break;
    case e.UNKNOWN_ERROR:
      display.innerHTML = `An unknown occured.`;
      break;
  }
}
