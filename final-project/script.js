//var map = new google.maps.Map(document.querySelector('#map'), {
//center: {
//lat: 40.7128,
//lng: -74.0059
//},
//zoom: 12,
//});

//var marker = new google.maps.Marker({
//position: {
//lat: 40.7128,
//lng: -74.0059
//},
//map: map,
//});

//Venue section
$.ajax({
ype: 'GET',
url: 'https://api.untappd.com/v4/brewery/info/94785?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
success: function (response) {
//  console.log(response);
//the loop  
response.response.brewery.checkins.items.forEach (function (checkin) {
console.log(checkin);

var res = {venues: [],}

if (checkin.venue.venue_id) {
$('#container')
.append('<div>Beer: ' + checkin.beer.beer_name + '</div>')
.append('<div>Venue: ' + checkin.venue.venue_name + '</div>')
//.append('<div>Address: ' + checkin.venue.location.venue_address + '</div>')
//.append('<div>Country: ' + checkin.venue.location.venue_country + '</div>')
//.append('<div>State: ' + checkin.venue.location.venue_state + '</div>')
//.append('<hr>');

//var marker = new google.maps.Marker({
//position: {

//lat: checkin.venue.location.lat,
//lng: checkin.venue.location.lng,

//},

//map: map,
//})

 } else {  
}

})
},
});


