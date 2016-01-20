$(document).ready(function() {

  for ( i = 1; i <= 100; i++) {

    if ( i % 15 === 0) {
      $( "li").append("Fizzbuzz");
    }
    else if ( i % 3 === 0) {
      $( "li").append("Fizz");
    }

    else if ( i % 5 === 0 ) {
      $( "li").append("Buzz");
    }

    else {
      $( "li").append(i);
    }

  }










});
