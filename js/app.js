$(document).ready(function() {

  for ( i = 1; i <= 100; i++) {

    if ( i % 15 === 0) {
      $( "span").append("Fizzbuzz");
    }
    else if ( i % 3 === 0) {
      $( "span").append("Fizz");
    }

    else if ( i % 5 === 0 ) {
      $( "span").append("Buzz");
    }

    else {
      $( "span").append(i);
    }

  }










});
