
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

//Alphabet City Brewing Company
$('#22243').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Alphabet City Brewing Company');

//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/22243?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
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
//Alphabet City Brewing Company - End
//Big Alice
$('#49805').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Big Alice');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/49805?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container49805').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Big Alice - End
//Braven Brewing Company
$('#114457').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Braven Brewing Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/114457?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container114457').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Braven Brewing Company- End
//Bridge and Tunnel Brewery
$('#3877986').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Bridge and Tunnel Brewery');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/3877986?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container3877986').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Bridge and Tunnel Brewery- End
//The Bronx Brewery
$('#15784').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('The Bronx Brewery');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/15784?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container15784').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//The Bronx Brewery- End
//Brooklyn Brewery
$('#259').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Brooklyn Brewery');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/259?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container259').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Brooklyn Brewery- End
//Chelsea Craft Brewing Co.
$('#374').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Chelsea Craft Brewing Co.');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/374?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container374').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Chelsea Craft Brewing Co.- End
//Evil Twin Brewing
$('#3735').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Evil Twin Brewing');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/3735?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container3735').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Evil Twin Brewing- End
//Finback Brewery
$('#52099').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Finback Brewery');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/52099?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container52099').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Finback Brewery - End
//Flagship Brewing Company
$('#115902').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Flagship Brewing Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/115902?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container115902').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Flagship Brewing Company - End
//Great South Bay Brewery
$('#2142').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Great South Bay Brewery');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/2142?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container2142').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Great South Bay Brewery - End
//Greenpoint Beer & Ale Company
$('#115381').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Greenpoint Beer & Ale Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/115381?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container115381').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Greenpoint Beer & Ale Company - End
//Kelso
$('#73610').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Kelso');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/73610?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container73610').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Kelso - End
//Grimm Artisanal Ales
$('#72844').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Grimm Artisanal Ales');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/72844?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container72844').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Grimm Artisanal Ales - End
//Gun Hill Brewing Company
$('#106148').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Gun Hill Brewing Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/106148?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container106148').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Gun Hill Brewing Company - End
//Interboro Spirits and Ales
$('#279573').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Interboro Spirits and Ales');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/279573?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container279573').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Interboro Spirits and Ales - End
//Kings County Brewers Collective
$('#167520').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Kings County Brewers Collective');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/167520?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container167520').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Kings County Brewers Collective - End
//LIC Beer Project
$('#201804').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('LIC Beer Project');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/201804?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container201804').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//LIC Beer Project - End
//Other Half Brewing Company
$('#94785').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Other Half Brewing Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/94785?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container94785').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Other Half Brewing Company - End
//Radiant Pig Craft Beers
$('#57402').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Radiant Pig Craft Beers');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/57402?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container57402').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Radiant Pig Craft Beers - End
//Rockaway Brewing Company
$('#47828').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Rockaway Brewing Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/47828?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container47828').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Rockaway Brewing Company - End
//SingleCut Beersmiths
$('#16555').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('SingleCut Beersmiths');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/16555?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container16555').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//SingleCut Beersmiths - End
//Sixpoint Craft Ales
$('#1149').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Sixpoint Craft Ales');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/1149?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container1149').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Sixpoint Craft Ales - End
//Staten Island Beer Company
$('#167557').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Staten Island Beer Company');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/167557?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container167557').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Staten Island Beer Company - End
//Third Rail Beer
$('#99460').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Third Rail Beer');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/99460?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container99460').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Third Rail Beer - End
//Threes Brewing
$('#161808').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Threes Brewing');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/161808?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container161808').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Threes Brewing - End
//Transmitter Brewing
$('#95893').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('Transmitter Brewing');
//Brewery section
$.ajax({
	type: 'GET',
	url: 'https://api.untappd.com/v4/brewery/info/95893?client_id=99506217035F59F9B0F16CE0841A88C4B27618F8&client_secret=667D5C8C35194D7CE4DBD863917D01A4207DF777',
	success: function(response) {
		//  console.log(response);
		//the loop  
		response.response.brewery.checkins.items.forEach(function(checkin) {
			console.log(checkin);
			var res = {
				venues: [],
			}
			if (checkin.venue.venue_id) {
				$('#container95893').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Brewery: ' + checkin.brewery.brewery_name + '</br>' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
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
				var infowindow = new google.maps.InfoWindow({
					content: contentString
				});
				marker.addListener('click', InfoWindow);

				function InfoWindow() {
					infowindow.open(map, marker);
				}
			} else {}
		})
	},
});
      } else {
       }
   });
//Transmitter Brewing - End







});

});


    
