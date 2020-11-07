var fadeDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  this.$node.addClass('fade');

  //return blinkyDancer;
};
fadeDancer.prototype = Object.create(makeDancer.prototype);

fadeDancer.prototype.constructor = fadeDancer;

fadeDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step

  makeDancer.prototype.step.call(this);
  
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  // console.log('in the make blinky dancer step function');
  // console.log(this);
  // console.log(this.$node);
  this.$node.attr("src", "https://img.favpng.com/2/11/15/golden-retriever-background-png-favpng-YGrdew7FDKgDTyBuEgGxTyGVp.jpg");
  //this.$node.fadeToggle("slow", "linear");
  // makeDancer.prototype.step.call(this);
  // this.$node.fadeIn();
};