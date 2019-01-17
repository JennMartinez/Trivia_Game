// Create global variables for the game //

var answers = ["Pennsylvania", "Tallahassee", "Resident Evil", "Brains", "Glen", "Red Queen", "The Winchester", "Rage Virus"];
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clockRunning = 40;
var totalQuestions = 8;


// Document ready //

$(document).ready(function() {

// HIDE timer, questions and answers, exit button,... screen //

$("#timer").hide();
$("#timer-title").hide();
$(".questions").hide();
$(".exit-button").hide();
$(".game-over").hide();
$(".reset-button").hide();

// START BUTTON click takes user to new screen //

$(".start").on("click", function() {
    $(".start").hide();
    $(".game-over").hide();
    $(".questions").show();
    $("#timer").show();
    $("#timer-title").show();
    $(".exit-button").show();
    $(".reset-button").show();
});


// Compare users guesses versus correct answers //

// function tally() {

// }


// New screen STARTS the TIMER, counting down (120 sec.) //
// If the timer runs out before the user clicks the DONE BUTTON, a new screen will display, 
// GAME OVER, and the users correct/incorrect/unanswered questions are displayed //

var start = setInterval(function() {
        $("#timer").text(clockRunning--);
        if (clockRunning == -1) {
                clearInterval(timer);
                $(".questions").hide(); 
                $("#timer").hide();
                $(".exit-button").show();
                $(".game-over").show();
                $("#timer-title").hide();
                tally();
        }
}, 1000);
 
// Only ONE available choice can be selected from the answers to each question //
// If DONE BUTTON is clicked, it displays a new screen //
// CORRECT/INCORRECT/UNANSWERED question(s) are displayed at the end of the game //
// The new screen displays, GAME OVER and the users correct/incorrect/unanswered question(s) are tallied //

$(".exit-button").on("click", function() {
        $(".exit-button").show();
        $(".start").hide();
        $(".questions").hide();
        $("#timer").hide();
        $("#timer-title").hide();
        $(".game-over").show();
});

// RESET BUTTON to start the game over, again //

// $(".reset-button").on("click", function() {
//         $(".reset-button").hide();

// }
           
});