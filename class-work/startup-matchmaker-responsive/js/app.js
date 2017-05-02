$(document).ready(function () {
	// console.logs the window.width
	$(window).resize(function () {
		console.log($(window).width())
	})

$('#taco').click (function () {
	$('#mobile-nav').slideToggle();
	});

})
