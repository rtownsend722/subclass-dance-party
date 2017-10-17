//Reduced movement of box dancer but now he lines up

var BoxDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.horizontalFlag = true; 
  this.verticalFlag = true; 

  this.step();
  this.setPosition(top, left);
};

BoxDancer.prototype = Object.create(Dancer.prototype);
BoxDancer.prototype.constructor = BoxDancer;

BoxDancer.prototype.step = function() {
  // both flags true, move to the right
  if (this.horizontalFlag && this.verticalFlag) {
    this.$node.animate({left: this.left + 100});
    this.horizontalFlag = false;
  // H false, V true, move down
  } else if (!this.horizontalFlag && this.verticalFlag) {
    this.$node.animate({top: this.top - 100});
    this.verticalFlag = false;
  // H false, V false, move to the left
  } else if (!this.horizontalFlag && !this.verticalFlag) {
    this.$node.animate({left: this.left - 100});
    this.horizontalFlag = true;

  // } else {
  // // } else if (this.horizontalFlag && !this.verticalFlag) {
  //   this.$node.animate({top: this.top + 100});
  //   this.verticalFlag = true;

  }

  Dancer.prototype.step.call(this);

};