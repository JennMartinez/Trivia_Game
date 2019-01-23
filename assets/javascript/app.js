// Create global variables for the game //

var answers = ["Pennsylvania", "Tallahassee", "Resident Evil", "Brains", "Glen", "Red Queen", "The Winchester", "Rage Virus"];
var right = 0;
var wrong = 0;
var noAnswer = 0;
var clockRunning = 60;
var playerAnswers = [];
var x = document.getElementById("myAudio");

function playAudio() {
     x.play();
}

// Document ready //

$(document).ready(function() {

// HIDE timer, questions and answers, exit button,... screen //

$("#timer").hide();
$("#timer-title").hide();
$(".questions").hide();
$(".exit-button").hide();
$(".game-over").hide();


// START BUTTON click takes user to new screen //

$(".start").on("click", function() {
    $(".start").hide();
    $(".game-over").hide();
    $(".questions").show();
    $("#timer").show();
    $("#timer-title").show();
    $(".exit-button").show();
    playAudio();

});

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
        }
}, 1000);

// Only ONE available choice can be selected from the answers to each question //
// If DONE BUTTON is clicked, it displays a new screen //
// CORRECT/INCORRECT/UNANSWERED question(s) are displayed at the end of the game //
// The new screen displays, GAME OVER and the users correct/incorrect/unanswered question(s) are displayed //

$(".exit-button").on("click", function(event) {
        event.preventDefault();
        $(".exit-button").show();
        $(".start").hide();
        $(".questions").hide();
        $("#timer").hide();
        $("#timer-title").hide();
        $(".game-over").show();

        // Place tally screen code here //

        playerAnswers.push($('input:radio[name="question1"]:checked').val());
        console.log("playerAnswers" + playerAnswers); 
        playerAnswers.push($('input:radio[name="question2"]:checked').val());
        console.log("playerAnswers" + playerAnswers);
        playerAnswers.push($('input:radio[name="question3"]:checked').val());
        console.log("playerAnswers" + playerAnswers);
        playerAnswers.push($('input:radio[name="question4"]:checked').val());
        console.log("playerAnswers" + playerAnswers);
        playerAnswers.push($('input:radio[name="question5"]:checked').val());
        console.log("playerAnswers" + playerAnswers);
        playerAnswers.push($('input:radio[name="question6"]:checked').val());
        playerAnswers.push($('input:radio[name="question7"]:checked').val());
        playerAnswers.push($('input:radio[name="question8"]:checked').val());
        console.log("playerAnswers" + playerAnswers); 
        console.log(answers);
        
        tally();
  
});

// Compare users guesses versus correct answers //

function tally() {
        for (var i = 0; i < 8; i++) {
if (playerAnswers === "") {
        noAnswer++;
        $("#unanswered").text("No brains: " + noAnswer);
} else if (playerAnswers[i] === answers[i]) {
        right++
        $("#correct").text("Brains: " + right);
} else if (playerAnswers[i] != answers[i]) {
        wrong++
        $("#incorrect").text("Half-Brains: " + wrong);
};
}};
});
