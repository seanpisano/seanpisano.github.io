//var map = new google.maps.Map(document.querySelector('#map'), {
//	center: {
// 		lat: 40.7128,
// 		lng: -74.0059
//  	},
//  	zoom: 12,
// });

 //var marker = new google.maps.Marker({
 //	position: {
//		lat: 40.7128,
//		lng: -74.0059
//	},
 //	map: map,
// });

//$.ajax({
 // 	type: 'GET',
 // 	url: 'http://api.citybik.es/citi-bike-nyc.json',
//  	success: function (response) {
  		//console.log(response)
  		//var firstStation = response[0];
  		//console.log(response [0])
//$('#container')
//.append('<div>' + firstStation.name + '</div>')
//.append('<div>Bikes Available: ' + firstStation.bikes + '</div>')
//.append('<div>Spaces Free: ' + firstStation.free + '</div>')
	

//create this loop	
//response.forEach(function (station) {

//$('#container')
// .append('<div>' + station.name + '</div>')
// .append('<div>Bikes Available: ' + station.bikes + '</div>')
// .append('<div>Spaces Free: ' + station.free + '</div>')
// .append('<hr>');

//console.log(station);

// var marker = new google.maps.Marker({
 //	position: {
//		lat: station.lat / 1000000,
//		lng: station.lng / 1000000,
//	},
// 	map: map,
//			})
// 		})
//	},
//});






//
//$.ajax({
//  	type: 'GET',
//  	url: 'https://data.ny.gov/resource/83cw-i36h.json',
//  	success: function (response) {
 // 		console.log(response)
 // 		var firstStation = response[0];
 // 		console.log(response [0])
//$('#container')
//.append('<div>' + firstStation.doing_business_as_dba + '</div>')
//.append('<div>Bikes Available: ' + firstStation.city + '</div>')
//.append('<div>Spaces Free: ' + firstStation.premises_name + '</div>')
	

//create this loop	
//response.forEach(function (station) {

//$('#container')
// .append('<div>' + station.doing_business_as_dba + '</div>')
// .append('<div>City: ' + station.city + '</div>')
// .append('<div>Place name: ' + station.premises_name+ '</div>')
// .append('<hr>');

//
 //var marker = new google.maps.Marker({
 //	position: {
//		lat: station.latitude,
//		lng: station.longitude,
//	},
// 	map: map,
//			})
// 		})
//	},
//});


$.ajax({
  	type: 'GET',
  	url: 'https://api.untappd.com/v4/beer/info/3839',
  	success: function (response) {
 		console.log(response)
 // 		var firstStation = response[0];
 // 		console.log(response [0])
//$('#container')
//.append('<div>' + firstStation.doing_business_as_dba + '</div>')
//.append('<div>Bikes Available: ' + firstStation.city + '</div>')
//.append('<div>Spaces Free: ' + firstStation.premises_name + '</div>')
	

//create this loop	
//response.forEach(function (station) {

//$('#container')
// .append('<div>' + station.doing_business_as_dba + '</div>')
// .append('<div>City: ' + station.city + '</div>')
// .append('<div>Place name: ' + station.premises_name+ '</div>')
// .append('<hr>');

//console.log(station);

 //var marker = new google.maps.Marker({
 //	position: {
//		lat: station.latitude,
//		lng: station.longitude,
//	},
// 	map: map,
//			})
 //		})
	},
});
