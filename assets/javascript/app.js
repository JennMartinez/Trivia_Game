// Create global variables for the game //

var answers = ["Pennsylvania", "Tallahassee", "Resident Evil", "Brains", "Glen", "Red Queen", "The Winchester", "Rage Virus"];
var right = 0;
var wrong = 0;
var noAnswer = 0;
var clockRunning = 400000;
var totalQuestions = 8;
// var playerAnswers = [];

// var question1 = document.questions.question1.value;
// var question2 = document.questions.question2.value;
// var question3 = document.questions.question3.value;
// var question4 = document.questions.question4.value;
// var question5 = document.questions.question5.value;
// var question6 = document.questions.question6.value;
// var question7 = document.questions.question7.value;
// var question8 = document.questions.question8.value;

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
//         if (playerAnswers == answers) {
//         right++
//         $("#correct").text("Brains: " + right);
// } else if (playerAnswers != answers) {
//         wrong++
//         $("#incorrect").text("Half-Brains: " + wrong);

// } else {
//         noAnswer++;
//         $("#unanswered").text("No brains: " + noAnswer);
// }
// }
// function tally() {
//         if (question1 == "Pennsylvania") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question1 != "Pennsylvania") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);
//         }

//         if (question2 == "Tallahassee") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question2 != "Tallahassee") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);
//         }

//         if (question3 == "Resident Evil") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question3 != "Resident Evil") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);       
//         }

//         if (question4 == "Food") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question4 != "Food") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong); 
//         }

//         if (question5 == "Glen") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question5 != "Glen") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong); 
//         }

//         if (question6 == "Red Queen") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question6 != "Red Queen") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);
//         }

//         if (question7 == "The Winchester") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question7 != "The Winchester") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);
//         }
        
//         if (question8 == "Rage Virus") {
//                 right++
//                 $("#correct").text("Brains: " + right);
//         } else if (question8 != "Rage Virus") {
//                 wrong++
//                 $("#incorrect").text("Half-Brains: " + wrong);
//         }
         
//         else {
//                 noAnswer++;
//                 $("#unanswered").text("No brains: " + noAnswer);
//         }

// };

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
// The new screen displays, GAME OVER and the users correct/incorrect/unanswered question(s) are displayed //

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