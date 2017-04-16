
var total = 0;

$('#arrow-up').click(function (event) {
	total = total + 1;
if (total == -20) {
		$('#masterbox').css('top', '-770px');
		$('#tempbox').css('top', '-485px');
	} else if (total == -15){
		$('#masterbox').css('top', '-750px');
		$('#tempbox').css('top', '-468px');
	} else if (total == -10){
		$('#masterbox').css('top', '-715px');
		$('#tempbox').css('top', '-448px');
	} else if (total == -5){
		$('#masterbox').css('top', '-680px');
		$('#tempbox').css('top', '-428px');
	} else if (total == 0){
		$('#masterbox').css('top', '-645px'); //632px
		$('#tempbox').css('top', '-409px');
	} else if (total == 5){
		$('#masterbox').css('top', '-610px');
		$('#tempbox').css('top', '-392px');
	} else if (total == 10){
		$('#masterbox').css('top', '-575px');
		$('#tempbox').css('top', '-373px');
	} else if (total == 15){
		$('#masterbox').css('top', '-540px');
		$('#tempbox').css('top', '-353px');
	} else if (total == 20){
		$('#masterbox').css('top', '-505px');
		$('#tempbox').css('top', '-336px');
	} else if (total == 25){
		$('#masterbox').css('top', '-470px');
		$('#tempbox').css('top', '-317px');
	} else if (total == 30){
		$('#masterbox').css('top', '-435px');
		$('#tempbox').css('top', '-298px');
	} else if (total == 35){
		$('#masterbox').css('top', '-400px');
		$('#tempbox').css('top', '-279px');
	} else if (total == 40){
		$('#masterbox').css('top', '-365px');
		$('#tempbox').css('top', '-260px');
	} else if (total == 45){
		$('#masterbox').css('top', '-330px');
		$('#tempbox').css('top', '-241px');
	} else if (total == 50){
		$('#masterbox').css('top', '-295px');
		$('#tempbox').css('top', '-222px');
	} else if (total == 55){
		$('#masterbox').css('top', '-260px');
		$('#tempbox').css('top', '-203px');
	} else if (total == 60){
		$('#masterbox').css('top', '-225px');
		$('#tempbox').css('top', '-184px');
	} else if (total == 65){
		$('#masterbox').css('top', '-190px');
		$('#tempbox').css('top', '-165px');
	} else if (total == 70){
		$('#masterbox').css('top', '-155px');
		$('#tempbox').css('top', '-146px');
	} else if (total == 75){
		$('#masterbox').css('top', '-120px');
		$('#tempbox').css('top', '-127px');
	} else if (total == 80){
		$('#masterbox').css('top', '-85px');
		$('#tempbox').css('top', '-108px');
	} else if (total == 85){
		$('#masterbox').css('top', '-50px');
		$('#tempbox').css('top', '-89px');
	} else if (total == 90){
		$('#masterbox').css('top', '-15px');
		$('#tempbox').css('top', '-70px');
	} else if (total == 95){
		$('#masterbox').css('top', '20px');
		$('#tempbox').css('top', '-51px');
	} else if (total == 100){
		$('#masterbox').css('top', '55px');
		$('#tempbox').css('top', '-32px');
	} else if (total == 105){
		$('#masterbox').css('top', '90px');
		$('#tempbox').css('top', '-13px');		
	} else if (total == 110){
		$('#masterbox').css('top', '125px');
		$('#tempbox').css('top', '6px');
	} else if (total == 115){
		$('#masterbox').css('top', '160px');
		$('#tempbox').css('top', '25px');
	} else if (total >= 90){
		$('#boxbox').css('background-color','#FE0000');
	} else if (total <= -15){
		$('#boxbox').css('background-color','#6509FE');
	} else {	
	}
$('#fahrenheit').val(total);
var fahrenheit = (total);
var fahrenheit = parseFloat(fahrenheit);
var covcelsius = (fahrenheit - 32) / 1.8;
$('#celsius').val( covcelsius );
})

$('#arrow-down').click(function (event) {
	total = total - 1;
if (total == -20) {
		$('#masterbox').css('top', '-770px');
		$('#tempbox').css('top', '-485px');
	} else if (total == -15){
		$('#masterbox').css('top', '-750px');
		$('#tempbox').css('top', '-468px');
	} else if (total == -10){
		$('#masterbox').css('top', '-715px');
		$('#tempbox').css('top', '-448px');
	} else if (total == -5){
		$('#masterbox').css('top', '-680px');
		$('#tempbox').css('top', '-428px');
	} else if (total == 0){
		$('#masterbox').css('top', '-645px'); //632px
		$('#tempbox').css('top', '-409px');
	} else if (total == 5){
		$('#masterbox').css('top', '-610px');
		$('#tempbox').css('top', '-392px');
	} else if (total == 10){
		$('#masterbox').css('top', '-575px');
		$('#tempbox').css('top', '-373px');
	} else if (total == 15){
		$('#masterbox').css('top', '-540px');
		$('#tempbox').css('top', '-353px');
	} else if (total == 20){
		$('#masterbox').css('top', '-505px');
		$('#tempbox').css('top', '-336px');
	} else if (total == 25){
		$('#masterbox').css('top', '-470px');
		$('#tempbox').css('top', '-317px');
	} else if (total == 30){
		$('#masterbox').css('top', '-435px');
		$('#tempbox').css('top', '-298px');
	} else if (total == 35){
		$('#masterbox').css('top', '-400px');
		$('#tempbox').css('top', '-279px');
	} else if (total == 40){
		$('#masterbox').css('top', '-365px');
		$('#tempbox').css('top', '-260px');
	} else if (total == 45){
		$('#masterbox').css('top', '-330px');
		$('#tempbox').css('top', '-241px');
	} else if (total == 50){
		$('#masterbox').css('top', '-295px');
		$('#tempbox').css('top', '-222px');
	} else if (total == 55){
		$('#masterbox').css('top', '-260px');
		$('#tempbox').css('top', '-203px');
	} else if (total == 60){
		$('#masterbox').css('top', '-225px');
		$('#tempbox').css('top', '-184px');
	} else if (total == 65){
		$('#masterbox').css('top', '-190px');
		$('#tempbox').css('top', '-165px');
	} else if (total == 70){
		$('#masterbox').css('top', '-155px');
		$('#tempbox').css('top', '-146px');
	} else if (total == 75){
		$('#masterbox').css('top', '-120px');
		$('#tempbox').css('top', '-127px');
	} else if (total == 80){
		$('#masterbox').css('top', '-85px');
		$('#tempbox').css('top', '-108px');
	} else if (total == 85){
		$('#masterbox').css('top', '-50px');
		$('#tempbox').css('top', '-89px');
	} else if (total == 90){
		$('#masterbox').css('top', '-15px');
		$('#tempbox').css('top', '-70px');
	} else if (total == 95){
		$('#masterbox').css('top', '20px');
		$('#tempbox').css('top', '-51px');
	} else if (total == 100){
		$('#masterbox').css('top', '55px');
		$('#tempbox').css('top', '-32px');
	} else if (total == 105){
		$('#masterbox').css('top', '90px');
		$('#tempbox').css('top', '-13px');		
	} else if (total == 110){
		$('#masterbox').css('top', '125px');
		$('#tempbox').css('top', '6px');
	} else if (total == 115){
		$('#masterbox').css('top', '160px');
		$('#tempbox').css('top', '25px');
	} else if (total >= 90){
		$('#boxbox').css('background-color','#FE0000');
	} else if (total <= -15){
		$('#boxbox').css('background-color','#6509FE');
	} else {	
	}

$('#fahrenheit').val(total);
var fahrenheit = (total);
var fahrenheit = parseFloat(fahrenheit);
var covcelsius = (fahrenheit - 32) / 1.8;
$('#celsius').val( covcelsius );	
})

// fahrenheit to celsius

$('.fahrenheit').keyup(function(event) {
var fahrenheit = $( this ).val();
var fahrenheit = parseFloat(fahrenheit);
var covcelsius = (fahrenheit - 32) / 1.8;
	$('.celsius').val( covcelsius );
})

// celsius to fahrenheit
$('.celsius').keyup(function(event) {
var celsius = $( this ).val();
var celsius = parseFloat(celsius);
var covfahrenheit = (celsius * (9/5)) + 32;
	$('.fahrenheit').val( covfahrenheit );
})





