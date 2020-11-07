$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    console.log('a button has been pressed');
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage .
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    console.log($('body').height());
    //height is 1041, figure out random between 400 and 1041 instead
    var screenHeight = (641 * Math.random()) + 400;
    console.log('this is the height in window');
    console.log(screenHeight);



    var screenWidth = $('body').width() * Math.random();
    console.log('this is the width in window');
    console.log(screenWidth);

    //the lower the height, the higher up the screen it is


    var dancer = new dancerMakerFunction(
      screenHeight,
      screenWidth,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });



  $('.moveDancerButton').on('click', function(event) {
    console.log('move button has been pressed');
    console.log(window.dancers);

    for (var i = 0; i < window.dancers.length; i++) {
      console.log(window.dancers[i]);
      window.dancers[i].removeClass();
      window.dancers[i].appendTo('.bottom');
      window.dancers[i].addClass('movedNode');
      //window.danvers[i].focus(function(){ $(this).css("all","unset"); });
    }


  });


  $('.dancer').on('click', function(event) {
    console.log('clicked on a dancer!!!!!!!');
  });

  //click on a dancer
  //log its coordinates in window

  //iterate through other dancers
  //identify the closest dancer
  //make the closest dancer do something






});

