//var fahrenheit = 0;
//var fahr = parseFloat(fahrenheit);

//var celsius = 0;
//var total = parseFloat(celsius);

//$('fname').click (function () {
	//total = total + 32;

	//if (total == 5) {
	//	$('body').css('background-color', 'red');
	//} else if (total == 10){
	//	$('body').css('background-color', 'green');
	//} else if (total == 15){
	//	$('body').css('background-color', 'blue');
	//} else {
	//	$('body').css('background-color', 'black');
	//}

	//$('#cel').text(total);
//})





var total = 0;


$('#clickup').click(function () {
	total = total + 1;
	$('#click-num').text(total);
})

$('#clickdwn').click(function () {
	total = total - 1;
	$('#click-num').text(total);
})

var celsius = parseFloat(total);

$('#clickup').click(function () {
	celsius = celsius * 1.8 + 32;
	$('#click-ans').text(celsius);
})
$('#clickdwn').click(function () {
	celsius = celsius + 32;
	$('#click-ans').text(celsius);
})


	//if (total == 5) {
	//	$('body').css('background-color', 'red');
	//} else if (total == 10){
	//	$('body').css('background-color', 'green');
	//} else if (total == 15){
	//	$('body').css('background-color', 'blue');
	//} else {
	//	$('body').css('background-color', 'black');
	//}