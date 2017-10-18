$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('.wrapper').append(dancer.$node);
    window.dancers.push(dancer);

    // When hovering or mousing over the Party Pooper emoji, more emoji fill the background
    $('.rainbow').hover(function() {
      console.log('Hi!');
      $('.wrapper').append("<div class = 'partypooper'><img src='./src/images/rainbow.png' height='50px' width='50px'></div>");
    });

  });

  // Lines up all the dancers at postion 150px from the top
  $('.lineUpButton').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.lineUp();
      dancer.top = 150;
    });        
  });

  // On click, when dancers are too close, it makes a sparkly sound
  $('.wrapper').on('click', function(event) {
    window.dancers.forEach(function(dancer) {
      dancer.collide();
    });
  });

});
