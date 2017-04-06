//1 - add event listener
//2 - store inputs  as variables using .value method
//function logic: max age - age *drinks per day*365
//output answers for users to see

document.querySelector('#click-me').onclick = function () {

	var currentAge = document.querySelector('#age').value;
	var maxAge = document.querySelector('#max-age').value;
	var favDrink = document.querySelector('#item').value;
	var drinksPerDay = document.querySelector('#num-per-day').value;

// this turns the stings into numbers

	currentAge = parseInt(currentAge);
	maxAge = parseInt(maxAge);
	drinksPerDay = parseInt(drinksPerDay);

// do the math
	var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365;

// out put to user
	document.querySelector('#solution').innerHTML = drinksLeft;
	document.querySelector('#drink').innerHTML = favDrink;
}

//the solution...............

// 1) Add an event listen to #click-me
// 2) Store inputs as variables using .value method
// 3) Function logic: (Max age - age) * drinks per day * 365
// 4) Output answers for the user to see

// 1)
//document.querySelector('#click-me').onclick = function () {
	// 2)
	//var currentAge = document.querySelector('#age').value;
	//var maxAge = document.querySelector('#max-age').value;
	//var favoriteDrink = document.querySelector('#item').value;
	//var drinksPerDay = document.querySelector('#num-per-day').value;

	// 3)
	//currentAge = parseInt(currentAge);
	//maxAge = parseInt(maxAge);
	//drinksPerDay = parseInt(drinksPerDay);

	//var drinksLeft = (maxAge - currentAge) * drinksPerDay * 365;

	// 4)
	//document.querySelector('#solution').innerHTML = drinksLeft;
	//document.querySelector('#drink').innerHTML = favoriteDrink;
//}