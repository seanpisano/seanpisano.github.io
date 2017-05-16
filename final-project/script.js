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
		dots: true,
		centerMode: true,
		focusOnSelect: true
	});
});
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
				$('#container').append('<div id="beer"> <p>' + checkin.beer.beer_name + '<br />' + 'Venue: ' + checkin.venue.venue_name + '</br>' + 'Address: ' + checkin.venue.location.venue_address + '</br>' + 'State: ' + checkin.venue.location.venue_state + '</br>' + 'Country: ' + checkin.venue.location.venue_country + '</p></div>');
				var contentString = '<div id="content">' + '<div id="siteNotice">' + '</div>' + '<h1 id="firstHeading" class="firstHeading">' + checkin.beer.beer_name + '</h1>' + '<div id="bodyContent">' + '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' + 'sandstone rock formation in the southern part of the ' + 'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' + 'south west of the nearest large town, Alice Springs; 450&#160;km ' + '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' + 'features of the Uluru - Kata Tjuta National Park. Uluru is ' + 'sacred to the Pitjantjatjara and Yankunytjatjara, the ' + 'Aboriginal people of the area. It has many springs, waterholes, ' + 'rock caves and ancient paintings. Uluru is listed as a World ' + 'Heritage Site.</p>' + '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' + 'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' + '(last visited June 22, 2009).</p>' + '</div>' + '</div>';
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
				marker.addListener('click', toggleBounce);

				function toggleBounce() {
					infowindow.open(map, marker);
					if (marker.getAnimation() !== null) {
						marker.setAnimation(null);
					} else {
						marker.setAnimation(google.maps.Animation.BOUNCE);
					}
				}
			} else {}
		})
	},
});

$(window).load(function(){
    $('#94785').each(function() {
        if ($(this).attr('aria-hidden') == 'false') {
            console.log('checked');
        } else {
            console.log('notchecked');
        }
    });
});

//$(window).load(function(){
//	$('#94785').each(function() {
//		if ($('#94785').attr('aria-hidden') == 'false') {
//			console.log('checked');
//		} else {
//			console.log('notchecked');
//		}
//	});
//});