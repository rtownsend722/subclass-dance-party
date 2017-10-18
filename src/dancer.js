var Dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<div class="dancer"></div>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
};

// Dancer step is to schedule a new step into the future with timeBetweenSteps
Dancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);  
};

// Lines up the dancers at 150px from the top
Dancer.prototype.lineUp = function() {
  var styleSettings = {
    top: 150
  };
  this.$node.css(styleSettings); 
};

// Sets up the initial CSS positioning of the dancer
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

// Compares position of all the dancers and plays a sound when they are too close
Dancer.prototype.collide = function() {
  window.positions = [];  
  for (var j = 0; j < window.dancers.length; j++) {
    window.positions.push([window.dancers[j].top, window.dancers[j].left]);  
  }

  // we want to iterate through position array using a for loop
  for (var i = 0; i < window.positions.length; i++) {
    var currentTop = window.positions[i][0];
    var currentLeft = window.positions[i][1];

    //Inner for loop that loops over the position array starting with index of 1
    for (var x = 0; x < window.positions.length; x++) {
      var compareTop = window.positions[x][0];
      var compareLeft = window.positions[x][1];

      //check current coordinates current top - top[i] < 100 // & curr.left - left[i] <10
      if (Math.abs(currentTop - compareTop) < 50 &&
          Math.abs(currentLeft - compareLeft) < 50 &&
          i !== x) {
        $('.wrapper').append("<audio src='./src/audio/shooting_star.mp3' autoplay></audio>");
      } else {
      }
    }
  }
};