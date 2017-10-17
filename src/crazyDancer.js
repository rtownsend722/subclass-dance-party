var CrazyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  this.$node.addClass('crazy');
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;


CrazyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var $randTop = $("body").width() * Math.random();
  var $randLeft = $("body").width() * Math.random();

  Dancer.prototype.setPosition.call(this, $randTop, $randLeft);

}
