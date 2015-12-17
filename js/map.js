var myCenter = new google.maps.LatLng(42.3163754, -71.1031654);

function initialize() {
var mapProp = {
  center:myCenter,
  zoom:13,
  scrollwheel:false,
  mapTypeId:google.maps.MapTypeId.ROADMAP
  };

var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading"><b>Chilacates</b></h1>'+
    '<div id="bodyContent">'+
    '<p>555-555-5555 <br>' +
    '224 Amory St. <br> Boston, MA 02130 '+
    '</div>'+
'</div>';

var infowindow = new google.maps.InfoWindow({
    content: contentString
});

var marker = new google.maps.Marker({
	position: myCenter,
	map: map,
	animation: google.maps.Animation.DROP,
});

google.maps.event.addListener(marker, 'click', function() {
  infowindow.open(map,marker);
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);