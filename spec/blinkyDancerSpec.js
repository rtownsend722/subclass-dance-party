describe('Dancer Tests', function() {

// Does not test Crazy Dancer or Rainbow Dancer at this time
  var blinkyDancer, lineDancer, clock;
  var timeBetweenSteps = 10;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    lineDancer = new LineDancer(20, 30, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('blinky dancer', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(1);
      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });

  describe('line dancer', function() {
    it('should move left and right', function() {
      sinon.spy(lineDancer, 'step');
      expect(lineDancer.flag).to.be.equal(false);
      clock.tick(timeBetweenSteps);
      expect(lineDancer.flag).to.be.equal(true);
    });
  });
});
