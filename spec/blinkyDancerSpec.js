describe('Dancer Tests', function() {

  var blinkyDancer, slidingDancer, boxDancer, clock;
  var timeBetweenSteps = 10;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
    slidingDancer = new SlidingDancer(20, 30, timeBetweenSteps);
    boxDancer = new BoxDancer(30, 40, timeBetweenSteps);
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

  describe('sliding dancer', function() {
    it('should move left and right', function() {
      sinon.spy(slidingDancer, 'step');
      expect(slidingDancer.flag).to.be.equal(false);
      clock.tick(timeBetweenSteps);
      expect(slidingDancer.flag).to.be.equal(true);
    });
  });

  describe('box dancer', function() {
    xit ('should move in a box pattern', function() {
    // H T, V T, Actually coming out H F, V T
    console.log('Opening Step', boxDancer.horizontalFlag, boxDancer.verticalFlag);

      sinon.spy(boxDancer, 'step');
      console.log(boxDancer.horizontalFlag);
      expect(boxDancer.horizontalFlag).to.be.equal(false);

      clock.tick(timeBetweenSteps);
      console.log(boxDancer.verticalFlag);
      expect(boxDancer.verticalFlag).to.be.equal(false);

      clock.tick(timeBetweenSteps);
      console.log(boxDancer.horizontalFlag);
 
      expect(boxDancer.horizontalFlag).to.be.equal(false);
      clock.tick(timeBetweenSteps);
 
      console.log(boxDancer.verticalFlag);
      expect(boxDancer.verticalFlag).to.be.equal(true);
    });
  });
});
