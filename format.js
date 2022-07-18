// HTML Geolocation API
var locate = document.getElementById("location");
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  else {
    locate.innerHTML = "Sorry, the geolocation API currently doesn't work on your browser."; 
  }
}
function showPosition(position) {
  locate.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude; 
}
function showError(error) {
  switch(error.code) {
    case error.PERMISSION_DENIED:
      locate.innerHTML = "The request for the Geolocation API has been denied."
      break;
    case error.POSITION_UNAVAILABLE:
      locate.innerHTML = "The location of the user is unavailable."
      break;
    case error.TIMEOUT:
      locate.innerHTML = "The request for the Geolocation API has timed out."
      break;
    case error.UNKNOWN_ERROR:
      locate.innerHTML = "Sorry, an unknown error has occurred."
      break;
  }
}
