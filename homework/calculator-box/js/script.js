var total = 0;



//user clicks #a10 - handles with a .click
//add 10 to total total = total + 10;
//write total to #out
$('#a10').click(function () {
	total = total + 10;
  	$('#out').html(total);
} )

$('#a20').click(function () {
	total = total + 20;
  	$('#out').html(total);
} )

$('#a30').click(function () {
	total = total + 30;
  	$('#out').html(total);
} )

$('#red').click(function () {
    $('#out').css('background', 'red');
})

$('#out').click(function () {
	total = 0;
  	$('#out').html(total);
  	$('#out').css('background', 'none');
} )

$('#blue').click(function() {
    $('#out').css('background', 'blue');
})

$('#n10').click(function () {
	total = total - 10;
  	$('#out').html(total);
} )

$('#n20').click(function () {
	total = total - 20;
  	$('#out').html(total);
} )

$('#n30').click(function () {
	total = total - 30;
  	$('#out').html(total);
} )