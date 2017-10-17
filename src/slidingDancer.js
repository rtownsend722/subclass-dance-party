var SlidingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this);
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.flag = true;

  this.step();
  this.setPosition(top, left);
};
//Sliding Dancer (moves left, toggle moves right) (dancer base)
//      $("body").width() * Math.random(),


SlidingDancer.prototype = Object.create(Dancer.prototype);
SlidingDancer.prototype.constructor = SlidingDancer;

SlidingDancer.prototype.step = function() {
  if (this.flag) {
    this.$node.animate({left: this.left + 100});
    this.flag = false;
  } else {
    this.$node.animate({left: this.left - 100});
    this.flag = true;
  }

  Dancer.prototype.step.call(this);

};