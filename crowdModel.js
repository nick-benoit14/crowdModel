
    function dot(inX, inY){

        this.probabilityArray = [];
        this.lastActivityLevel = false;
        this.dotCoordinates = {x:inX, y:inY};

        this.fillArray = function(){

              var activityDispositionIncrement =  Math.floor(Math.random() * 66) + 33; //returns value between 33 - 100

          for(var i=0; i < 100; i++){
              if(i == activityDispositionIncrement){this.probabilityArray[i] = true;}
              else{this.probabilityArray[i] = false;} //fills array with inital all false values
            }}

        this.alterProbabilities = function(numChanges, value){
          numChanges = Math.floor(numChanges);  //validate inputs
          if(numChanges > 0 && numChanges < 101){
              if(value === true || value === false){

                for(var i=0; i < numChanges; i++){
                  var randomIndex = Math.floor(Math.random() * 100) + 1;
                  this.probabilityArray[randomIndex] = value;

                }

              }
          else{console.log("Change value parameter must be boolean");}}
          else{console.log("Change quantity out of range");}}




        this.printProbabilities = function(){

             var trueCount = 0;
             var falseCount = 0;

            for(var i=0; i < this.probabilityArray.length; i++){

                        if(this.probabilityArray[i] == true){trueCount++;}
                        else{falseCount++;}}
            console.log("false Count: " + falseCount);
            console.log("true Count: " + trueCount);
            var probabilityRatio = trueCount / falseCount;
            console.log("Probability Ratio: " + probabilityRatio);}
        this.getXY = function(){return this.dotCoordinates;}

            }


    function dotManager(){

      //API------------------------------------------------------
      //dotManager.newDot() --- initialize new dot and add to array
      //getDot(index) --------- returns at from dot array[index]
      //getDotState(index)----- runs probabilites and returns dot either dot state 1,2, or 3
          //1 = base state; 2 = inBetweenState; 3 = superState; //* dot state is cyclical and cannot
          //skip states. IE if a dot is in state 2 its previous state was 1 and depending on whether or
          //not it is selected again its next state will be 1 or 3.
          //returns -1 if bad things are happening


    this.initializeTest = false;
    this.dotaBase = []

    this.newDot = function(inX, inY){

      var distanceFromIndex = -1;

//TODO add distance calc 
      //if(null != dotaBase){
         //var distX = this.dotaBase[0].getXY();
        // var distY;

        // distanceFromIndex = Math.sqrt();}


        var dotHolder = new dot(inX, inY); //create new dot
        dotHolder.fillArray(); //fill array
        dotHolder.alterProbabilities(100, true);
        this.dotaBase[this.dotaBase.length] = dotHolder;} //add dot to array

    this.getDot = function(index){return this.dotaBase[index];} //TODO validate input

    this.getDotState = function(index){

      var randIndex = Math.floor(Math.random()* 100);
      var dotState = this.getDot(index).probabilityArray[randIndex];
      var lastDotState = this.getDot(index).lastActivityLevel;

      if(dotState == false){ //state 1
        this.getDot(index).lastActivityLevel = false;
        return 1;}

      else if(dotState == true && this.getDot(index).lastActivityLevel == true){ //state 2
        this.getDot(index).lastActivityLevel = false;
        return 3;}

      else if(dotState == true){
        this.getDot(index).lastActivityLevel = true;
        return 2;}
      else{return -1;}

    }



}














































    /*  //atempt to read space bar keystoke press
$( "#target" ).keydown(function() {
  alert( "Handler for .keydown() called." );
});



$( '.input' ).keydown(function(e){

    if( e.keyCode == 32 ){
        alert( 'space button pressed');
        console.log( 'space button pressed');

    }
});
*/
