
    function dot(){

        this.probabilityArray = [];
        this.lastActivityLevel = false;


        this.fillArray = function(){
          for(var i=0; i < 100; i++){
                if(i % 5 == 0){this.probabilityArray[i] = true;}
                else{this.probabilityArray[i] = false;}
            }}

        this.printProbabilities = function(){

             var trueCount = 0;
             var falseCount = 0;

            for(var i=0; i < this.probabilityArray.length; i++){

                        if(this.probabilityArray[i] == true){trueCount++;}
                        else{falseCount++;}}
            console.log("false Count: " + falseCount);
            console.log("true Count: " + trueCount);
            var probabilityRatio = trueCount / falseCount;
            console.log("Probability Ratio: " + probabilityRatio);}}


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

    this.newDot = function(){
        var dotHolder = new dot(); //create new dot
        dotHolder.fillArray(); //fill array
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
