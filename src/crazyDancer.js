var CrazyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.step();
  this.setPosition(top, left);
  var $unicornSpan = this.$node.addClass('crazy'); 
  $unicornSpan.append("<img id='unicorn' src='./src/images/unicorn.png' height='100%' width= '100%'>");
};

CrazyDancer.prototype = Object.create(Dancer.prototype);
CrazyDancer.prototype.constructor = CrazyDancer;

// CrazyDance step moves dancer to a randomized location.
CrazyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var $randTop = $("body").width() * Math.random();
  var $randLeft = $("body").width() * Math.random();

  Dancer.prototype.setPosition.call(this, $randTop, $randLeft);
};
