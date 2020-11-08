var slideDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.addClass('slide');

  //return blinkyDancer;
};
slideDancer.prototype = Object.create(makeDancer.prototype);

slideDancer.prototype.constructor = slideDancer;

slideDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('in the make blinky dancer step function');
  // console.log(this);
  // console.log(this.$node);


  //this.$node.slideDown("slow", "swing");
  //this.$node.toggle();
  this.$node.animate({height: '+=100px', width: '+=100px'}, 500);
  //makeDancer.prototype.step.call(this);
  this.$node.animate({height: '-=100px', width: '-=100px'}, 500);

  // this.$node.animate({
  //   opacity: 0.5,
  //   left: "+=50",
  //   height: "toggle"
  // }, 5000, function() {
  //   // Animation complete.
  // });


};