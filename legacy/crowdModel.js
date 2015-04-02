//TODO add many dots to dotabase

$('document').ready(function(){

    function dot(){

        this.probabilityArray = [];
        this.lastActivityLevel = false;


        this.fillArray = function(){
          for(var i=0; i < 100; i++){
                if(i % 5 == 0){this.probabilityArray[i] = true;}
                else{this.probabilityArray[i] = false;}
            }}

        this.printProbabilities =function(){

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

    this.getDotState = function(){

      var randIndex = Math.floor(Math.random()* 100);
      var dotState = this.getDot(i).probabilityArray[randIndex];
      var lastDotState = this.getDot(i).lastActivityLevel;

      if(dotState == false;){ //state 1
        this.getDot(i).lastActivityLevel = false;
        return 1;}

      else if(dotState == true && this.getDot(i).lastActivityLevel = true){ //state 2
        this.getDot(i).lastActivityLevel = false;
        return 3;}

      else if(dotState == true){
        this.getDot(i).lastActivityLevel = true;
        return 2;}
      else{return -1;}

    }
    this.drawDots = function(){//draw dots on screen

        var state1 = 0;
        var state2 = 0;
        var state3 = 0;

        $('body').empty();
        for(var i=0; i < this.dotaBase.length; i++){

          var randIndex = Math.floor(Math.random()* 100);
          var dotState = this.getDot(i).probabilityArray[randIndex];
          var lastDotState = this.getDot(i).lastActivityLevel;


          if(dotState == false){
            $('body').append("<div class ='box'>.</div>");
            state1++;
            this.getDot(i).lastActivityLevel = false;

            }

          else if(dotState == true && lastDotState == true){
            $('body').append("<div class ='box'>0</div>");
            this.getDot(i).lastActivityLevel = false;
            state3++;
}
            else if(dotState == true){
            $('body').append("<div class ='box'>*</div>");
            this.getDot(i).lastActivityLevel = true;
            state2++;
          }}
console.log(". Stage Dots: :" + state1);
console.log("* Stage Dots: :" + state2);
console.log("0 Stage Dots: :" + state3);
}


    this.printDotInfo = function(){
        console.log("Number of Dots: " + this.dotaBase.length);}
    };

//-----------------------------------------------------------------main


 var d1 = new dot();


var mngr = new dotManager();

for(var i=0; i < 1000; i++){

  mngr.newDot();

}

$('body').click(function(){
    $('body').append("<div class ='box'>O</div>");
    mngr.drawDots();


});
















});







































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
