var map = new google.maps.Map(document.querySelector('#map'), {
center: {
lat: 40.7128,
lng: -74.0059
},
zoom: 10,
});

var marker = new google.maps.Marker({
position: {
lat: 40.7128,
lng: -74.0059
},
map: map,
});

//Brewery section
$.ajax({
type: 'GET',
url: 'https://api.untappd.com/v4/brewery/info/94785?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
success: function (response) {
//  console.log(response);
//the loop  
response.response.brewery.checkins.items.forEach (function (checkin) {
console.log(checkin);

var res = {venues: [],}

if (checkin.venue.venue_id) {
$('#container')
.append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');

var marker = new google.maps.Marker({
position: {
lat: checkin.venue.location.lat,
lng: checkin.venue.location.lng,
title:"checkin.beer.beer_name"
},

map: map,
})

 } else {  
}

})
},
});


