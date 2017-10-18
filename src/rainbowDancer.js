var RainbowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  var $rainbowSpan = this.$node.addClass('rainbow'); 
  $rainbowSpan.append("<img src='./src/images/rainbow.png' height='100%' width= '100%'>");
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;

//Randomly place rainbow dancers
RainbowDancer.prototype.step = function() {
  Dancer.prototype.setPosition.call(this, 100, 100);
};