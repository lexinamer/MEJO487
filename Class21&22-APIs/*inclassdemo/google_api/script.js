console.log("hello there");

// Set up data
var locations = [
  {
    name: 'Memphis, TN',
    description: 'Lexi\'s Hometown',
    lat: 35.149532,
    lng: -90.048981
  },{
    name: 'Chapel Hill, NC',
    description: 'Where Lexi went to grad school',
    lat: 35.913200,
    lng: -79.055847
  },{
    name: 'New York, NY',
    description: 'Where Lexi lived after college',
    lat: 40.712776,
    lng: -74.005974
  }
]

// Initialize and add the map
function initMap() {
  // The location of CH
  var ch = {lat: 35.910259, lng: -79.055473};
  // The map, centered at CH
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 6,
      center: ch
    }
  );

  // Set variables
    var infowindow = new google.maps.InfoWindow();
    var marker, i;
    var coords = [];

  // For loop
  for (i = 0; i < locations.length; i++) {

    // new marker for each point
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
      map: map
    });

    // add tooltip on click
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].name + '<br>' + locations[i].description);
        infowindow.open(map, marker);
      }
    })(marker, i));

    // push coords to array for polyline
    coords.push({
      lat: locations[i].lat,
      lng: locations[i].lng
    })
  }// close for loop

  // set up polyline
  console.log(coords);
  var paths = new google.maps.Polyline({
    path: coords,
    geodesic: true,
    strokeColor: 'green',
    strokeOpacity: 1.0,
    strokeWeight: 4
  });

  paths.setMap(map);
}
