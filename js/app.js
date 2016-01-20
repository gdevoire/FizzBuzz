$(document).ready(function() {

  for ( i = 1; i <= 100; i++) {

    if ( i % 15 === 0) {
      $(".looping").append('<li> FizzBuzz </li>');
    }
    else if ( i % 3 === 0) {
      $(".looping").append('<li> Fizz </li>');
    }

    else if ( i % 5 === 0 ) {
      $(".looping").append('<li> Buzz </li>');
    }

    else {
      $(".looping").append('<li>' + i + '</li>');
    }

  }


});
