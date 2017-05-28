
var map = new google.maps.Map(document.querySelector('#map'), {
	center: {
		lat: 40.7128,
		lng: -74.0059
	},
	zoom: 10,
});
//var marker = new google.maps.Marker({
//position: {
//lat: 40.7128,
//lng: -74.0059
//},
//map: map,
//});
$(document).ready(function() {
	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: true,
		focusOnSelect: true
	});
});

$(window).load(function(){

$( "button, img" ).click(function() {
 console.log('arrow clicked');

//url with a var
$('#22243').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
			var foo = '22243';
            console.log(foo);


//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://someurl.vom/'+foo+'?client_id=x&client_secret=y',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container22243').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
				
				var markers = [];

				var contentString ='<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">' + checkin.beer.beer_name + '</h1>' + '<div id="bodyContent">' + '<p>Brewery: ' + checkin.brewery.brewery_name + ',</br>' + 'Venue: ' + checkin.venue.venue_name + ',<br />' + 'Address: ' + checkin.venue.location.venue_address + ',</br>' + 'State: ' + checkin.venue.location.venue_state + ',</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p>' +  '</div>' + '</div>';
				var marker = new google.maps.Marker({
					position: {
						lat: checkin.venue.location.lat,
						lng: checkin.venue.location.lng,
					},
					title: checkin.beer.beer_name,
					animation: google.maps.Animation.DROP,
					map: map,
				});

				markers.push(marker);

				function setMapOnAll(map) {
				for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(map);
				}
				}

				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}

				function deleteMarkers() {
				clearMarkers();
				markers = [];
				}

			} else {}
		})
	},
});
      } else {
       }
   });
//url with a var - End


});

});


    
