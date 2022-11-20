function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15.5,
    center: { lat: 41.877359882395616, lng: -87.61193120547523},
  });
  var marker = new google.maps.Marker({
    position: { lat: 41.883949366404, lng: -87.61204036541213},
    map: map,
  });
  var sailingArea = new google.maps.Circle({
    center:{ lat: 41.87737915853962, lng: -87.60882455230232},
    radius:600,
    strokeColor:"#FF0000",
    strokeOpacity:0.8,
    strokeWeight:2,
    fillColor:"#FF0000",
    fillOpacity:0.2,
    map: map
  });
  var infowindow = new google.maps.InfoWindow({
    content:"This is the location of the Yacht Club that I sail out of. The red circle is the area where we usually sail during practice."
  });
  infowindow.open(map, marker);
}
window.initMap = initMap;
