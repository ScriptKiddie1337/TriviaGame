var score = 0;
var questions = [{question:"What was the most popular video game in 2009", answers:["a", "b", "c", "d"]}, {question:"What was the most popular video game in 2010", answers:["e", "f", "g", "h"]}, {question:"What was the most popular video game in 2011" , answers:["i", "j", "k", "l"]}, {question:"What was the most popular video game in 2012", answers:["m", "n", "o", "p"]}, {question:"What was the most popular video game in 2013", answers:["q", "r", "s", "t"]}]

//3 click events
//1. Starts the Game
//2. Chooses Answers
//3. Resets the game
$(document).on('click', '.start', function(e) {
   game.displayQuestions(e); 
   });

//Creates the logic to push to the document.onclick
var game = {
    displayQuestions:function() {
        $(".gameContainer").html("<h1>" + "TEST ME" + "</h1>")
    },

    counter:120,
    countdown:function() {
        game.counter--;
        $('#counter-timer').html(game.counter);

        if (game.counter === 0) {
            console.log("TIME IS UP YOU FOOL");
            game.done();
        }
    },

    start:function() {
        timer=setInterval(game.countdown, 1000);
    },

    done:function() {
        if 
    }

};


