







// 1. Attach .click() event to #submit
// 2. Attach an anonymous function to the above .click() that does the following:
// 3. Create a variable, grade, assigned to value inside #input-grade
// 4. Use parseFloat() to transform the variable grade into a number
// 5. Write an if/else if/else statement that outputs a LETTER grade to #output-grade based on the NUMERICAL grade the user entered (don't worry about +/- grades)
// Ex: user enters "95", #output-grade should contain "A"
// Ex: user enters "75", #output-grade should contain "C"

$('#submit').click(function () {
  var grade = $('#input-grade').val();
  
  // 4.
  grade = parseFloat(grade);
  
  // 5.
  if (grade >= 90) {
    $('#output-grade').text('A');
  } else if (grade >= 80) {
    $('#output-grade').text('B');
  } else if (grade >= 70) {
    $('#output-grade').text('C');
  } else if (grade >= 60) {
    $('#output-grade').text('D');
  } else {
    $('#output-grade').text('You Fail!');
  }
  
});









// Write a function, "calculate", that accepts ONE argument, "cost", and outputs the following:
// A) Tax (assume 8.25%) to #tax
// B) Tip (assume 20%) to #tip
// C) The new total (meal cost + tax + tip) to #total

$('#submit').click(function () {
  // invoke the function calculate here; pass it the value from #cost
  // remember to parse from a string to a number
  var input = $('#cost').val();
  input = parseFloat(input);
  
  calculate(input);
})

// Define a separate function, calculate, below
// This function should take one argument: cost
// Inside this function, define three variables:
// - var tax = cost * 0.0825
// - var tip = cost * 0.2
// - var totalCost = cost + tax + tip
// Lastly, this function should output these three variables to their corresponding HTML elements (#tax, #tip, and #total)

function calculate (cost) {
  var tax = cost * 0.0825;
  var tip = cost * 0.2;
  var totalCost = cost + tax + tip;
  
  $('#tax').text(tax);
  $('#tip').text(tip);
  $('#total').text(totalCost);
}




// 1. Write a total of five functions, one for each button: #append, #prepend, #before, #after, and #remove.
// 2. Each button, except #remove, should add a <p> tag containing the text inside #text to #target
// Ex: Clicking #append should .append() a <p> tag to #target
// Ex: Clicking #after should .after() a <p> tag to #target
// 3. Clicking #remove should remove all the <p> tags from the page


// Append
$('#append').click(function () {
  // 1. create a variable, text, assigned to the value inside of #text
  var text = $('#text').val();
  
  // 2. create a new variable, output, that concatenates text within a <p> tag, example: if user enters "hello", output should equal: "<p>hello</p>"
  var output = '<p>' + text + '</p>';
  
  // 3. Use .append() to attach the variable output to #target
  $('#target').append(output);
})

// PREPEND
$('#prepend').click(function () {
  var text = $('#text').val();
  var output = '<p>' + text + '</p>';
  $('#target').prepend(output);
})

// BEFORE
$('#before').click(function () {
  var text = $('#text').val();
  var output = '<p>' + text + '</p>';
  $('#target').before(output);
})

// AFTER
$('#after').click(function () {
  var myOutput = hamster();
  // var myOutput = '<p>hello, world!<p>';
  $('#target').after(myOutput);
})

// REMOVE
$('#remove').click(function () {
  $('p').remove();
})

function hamster () {
  var text = $('#text').val();
  var output = '<p>' + text + '</p>';
  
  return output;
}
