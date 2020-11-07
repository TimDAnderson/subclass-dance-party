// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  console.log('in the makeDancer function');
  //var dancer = {};

  // use jQuery to create an HTML <span> tag
  //this.$node = $('<span class="dancer" ></span>');
  this.$node = $('<img class="image" src="https://www.jing.fm/clipimg/full/90-900384_goldendoodle-01-yappicon-golden-doodle-cartoon-head.png" alt="" width="120" height="120"></img>');
  this.timeBetweenSteps = timeBetweenSteps;

  console.log('logging this');
  console.log(this);
  console.log('logging this.step');
  console.log(this.step);

  //I can run the following in the console var dancer = new makeDancer()


  this.step(); // <-- need to add a .call here?  what is the thisArg?



  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  //return dancer;
};



makeDancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var currentThis = this;
  
  setTimeout(function () { currentThis.step(); }, this.timeBetweenSteps); //not sure about set timeout
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

