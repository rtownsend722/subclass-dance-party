
var LineDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.horizontalFlag = true; 
  this.verticalFlag = true; 

  this.step();
  this.setPosition(top, left);

  this.$node.addClass('line');
};

LineDancer.prototype = Object.create(Dancer.prototype);
LineDancer.prototype.constructor = LineDancer;


LineDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);

  var oldTop = this.$node.position().top;
  var randLeft = $("body").width() * Math.random();

  Dancer.prototype.setPosition.call(this, oldTop, randLeft);
};

// LineDancer.prototype.collide = function() {
//   //iterate through window.dancers
//   for (var j = 0; j < window.dancers.length; j++){
//   //create window.positions array
//     window.positions = [];  
//   //for each item in window.dancers
//   //we want to push it's top and left values to the positions array
//     window.positions.push([window.dancers[j].top, window.dancers[j].left]);  
// // debugger;  
//   }

//   // we want to iterate through position array using a for loop
//   for (var i = 0; i < window.positions.length; i++){
//     // We want a current variable that is set/points to the position coordinates of i.
//     var currentTop = window.positions[i][0];
//     var currentLeft = window.positions[i][1];

//     //Inner for loop that loops over the position array starting with index of 1
//     for (var x = 0; x < window.positions.length; x++){
//       //check current coordinates current top - top[i] < 100 // & curr.left - left[i] <10
//       if (currentTop - window.positions[x][0] < 100 && i!==x){
//         // if true, then alert screen "Oh No! Too close!"
//         alert("Too Close!");
//       }
//     }
//   }
// };