var score = 0;
var questions = [{question:"What was the most popular video game in 2009", answers:["a", "b", "c", "d"]}, {question:"What was the most popular video game in 2010", answers:["e", "f", "g", "h"]}, {question:"What was the most popular video game in 2011" , answers:["i", "j", "k", "l"]}, {question:"What was the most popular video game in 2012", answers:["m", "n", "o", "p"]}, {question:"What was the most popular video game in 2013", answers:["q", "r", "s", "t"]}]

//3 click events
//1. Starts the Game
//2. Chooses Answers
//3. Resets the game
$(document).on('click', '.start', function(e) {
   game.start(e); 
   });

//Creates the logic to push to the document.onclick
var game = {
    displayQuestions:function() {
        $('.gameContainer').html('<h1>' + 'TEST ME' + '</h1>')
    },


    counter:120,
    countdown:function() {
        setInterval(function() {
            game.counter--;
            console.log(game.counter)
            $('#counter-timer').html(game.counter);
            if (game.counter === 0) {
                console.log('TIME IS UP YOU FOOL');
                game.done();
            }
        }, 1000)
      
    },

    score:0,
    

    start:function() {
       this.countdown();
        $('.scoreContainer').html('<h1>' + score + '</h1>');
        
        //add time remaining to the dom - DISPLAY IT!
        
        //for loop questions to dipslay on DOM using append
        //radio buttons included in answers - make logic to add radio buttons
        //Creates a button that lets the game know you are finished, so a function to end the game if they click a button or run out of time
    },

    //done function when the timer hits zero or when you click the done button
    //checks your answers
    //resets the game
    //displays the final score
   /*  done:function() {
        if 
    }  */

};

