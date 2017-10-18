
var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalFlag = true; 
  this.verticalFlag = true; 

  this.step();
  this.setPosition(top, left);

  var $wizardSpan = this.$node.addClass('line'); 
  $wizardSpan.append("<img src='./src/images/wizard.jpg' height='100%' width= '100%'>");
};

LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;

// LineDancer step moves back and forth on the same line
LineDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var oldTop = this.$node.position().top;
  var randLeft = $("body").width() * Math.random();

  Dancer.prototype.setPosition.call(this, oldTop, randLeft);
};