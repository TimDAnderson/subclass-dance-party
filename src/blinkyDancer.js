var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.addClass('blinky');

  //return blinkyDancer;
};
makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);

makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

makeBlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  
  // toggle() is  a jQuery method to show/hide the <span>  tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('in the make blinky dancer step function');
  // console.log(this);
  // console.log(this.$node);
  this.$node.attr('src', 'https://dogbreedcartoon.com/wp-content/uploads/2016/12/Goldendoodle-Special.png');
  this.$node.toggle();

};