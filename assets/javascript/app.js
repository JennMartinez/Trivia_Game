// Create global variables for the game //

var answers = ["Pennsylvania", "Tallahassee", "Resident Evil", "Brains", "Glen", "Red Queen", "The Winchester", "Rage Virus"];
var right = 0;
var wrong = 0;
var noAnswer = 0;
var clockRunning = 100;
var playerAnswers = [];
// var zombieSounds = new Audio("./assets/bhuvububy.wav");

// Document ready //

$(document).ready(function() {

// zombieSounds.play();

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
        // zombieSounds.play();
// Place tally code here //

playerAnswers = $('input:radio[name="question1"]:checked').val();
playerAnswers = $('input:radio[name="question2"]:checked').val();
playerAnswers = $('input:radio[name="question3"]:checked').val();
playerAnswers = $('input:radio[name="question4"]:checked').val();
playerAnswers = $('input:radio[name="question5"]:checked').val();
playerAnswers = $('input:radio[name="question6"]:checked').val();
playerAnswers = $('input:radio[name="question7"]:checked').val();
playerAnswers = $('input:radio[name="question8"]:checked').val();
console.log(playerAnswers = $('input:radio[name="question1"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question2"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question3"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question4"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question5"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question6"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question7"]:checked').val());
console.log(playerAnswers = $('input:radio[name="question8"]:checked').val());

playerAnswers.push($('input:radio[name="question1"]:checked').val().attr(answers[0]));
console.log(playerAnswers.push($('input:radio[name="question1"]:checked').val().attr(answers[0]))


        tally();

});

// Compare users guesses versus correct answers //


// playerAnswers = answers[0];

        // playerAnswers.push($(defaultValue[0]).append("#a1 input:checked"));
        // playerAnswers.push($(defaultValue[1]).append("#a2 input:checked"));
        // playerAnswers.push($(defaultValue[2]).append("#a3 input:checked"));
        // playerAnswers.push($(defaultValue[3]).append("#a4 input:checked"));
        // playerAnswers.push($(defaultValue[4]).append("#a5 input:checked"));
        // playerAnswers.push($(defaultValue[5]).append("#a6 input:checked"));
        // playerAnswers.push($(defaultValue[6]).append("#a7 input:checked"));
        // playerAnswers.push($(defaultValue[7]).append("#a8 input:checked"));
        // console.log(playerAnswers);

        // answers = $("#a1 input:radio[name='question1']:checked");
        // answers = $("#a2 input:radio[name='question2']:checked");
        // answers = $("#a3 input:radio[name='question3']:checked");
        // answers = $("#a4 input:radio[name='question4']:checked");
        // answers = $("#a5 input:radio[name='question5']:checked");
        // answers = $("#a6 input:radio[name='question6']:checked");
        // answers = $("#a7 input:radio[name='question7']:checked");
        // answers = $("#a8 input:radio[name='question8']:checked");
        // console.log($("#a1 input:radio[name='question1']:checked"));
        // playerAnswers.push()

        // playerAnswers.push($("#a1 input:radio[name='question1']:checked")(answers[0]));
        // console.log(playerAnswers);

function tally() {
        for (var i = 0; i < 8; i++) {
if (playerAnswers[i] === answers[i]) {
        right++
        $("#correct").text("Brains: " + right);
} else if (playerAnswers[i] != answers[i]) {
        wrong++
        $("#incorrect").text("Half-Brains: " + wrong);
} else if (playerAnswers === "") {
        noAnswer++;
        $("#unanswered").text("No brains: " + noAnswer);
};
}};
});
