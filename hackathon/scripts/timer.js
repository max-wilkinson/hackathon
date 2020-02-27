// Inspired by the timer at https://www.w3schools.com/howto/howto_js_countdown.asp

var htmlElement = 'timer';

// Set the date we're counting down to
var hackathonStart = new Date('March 27, 2020 08:30:00').getTime();

// Update the count down every 1 second
var interval = setInterval(function() {
  // Find the remaining time between the hackathon start and now
  var remainingTime = hackathonStart - new Date().getTime();

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById(htmlElement).innerHTML =
    days +
    'D ' +
    hours +
    'H ' +
    minutes +
    'M ' +
    seconds +
    'S ';

  // When the countdown finishes update the text
  if (remainingTime < 0) {
    clearInterval(interval);
    document.getElementById(htmlElement).innerHTML = 'Now!';
  }
}, 1000);
