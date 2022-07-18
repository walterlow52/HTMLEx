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
