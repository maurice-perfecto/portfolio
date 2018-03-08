var map;

function initMap() {
    var Stonehenge = {
        lat: 51.178884,
        lng: -1.826214
    };

    var map = new google.maps.Map(document.getElementById('map'), {
        center: Stonehenge,
        zoom: 18,
        mapTypeId: 'satellite',
    });
    

    var marker = new google.maps.Marker({
        position: Stonehenge,
        map: map,
        title: 'Stonehenge'
    });
    
    var contentString = '<p>Stonehenge</p>';
    
    var infowindow = new google.maps.InfoWindow ({
        content: contentString,
    });
    
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });
}
