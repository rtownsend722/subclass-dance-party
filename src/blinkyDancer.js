var BlinkyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  this.$node.addClass('blinky');
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var RGBColor = function() { 
    return Math.floor(Math.random() * 256); 
  };

   var randomColor = {
    border: "10px solid rgb(" + 
      RGBColor() + ',' + 
      RGBColor() + ',' + 
      RGBColor() + ')'};

  this.$node.css(randomColor);

  this.$node.toggle();
};


