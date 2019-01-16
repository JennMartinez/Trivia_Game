// Create global variables for the game //

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var clockRunning = false;
var clock = 120;



// Document ready //

$(document).ready(function() {

// HIDE timer, questions and answers, exit button, and game over screen //

$("#timer").hide();
$("#timer-title").hide();
$(".questions").hide();
$(".exit-button").hide();
$(".game-over").hide();

// START BUTTON click takes user to new screen //

$(".start").on("click", function() {
    $(".start").hide();
    $(".questions").show();
    $("#timer").show();
    $("#timer-title").show();

});





// Variable for QUESTIONS and ANSWERS //

// var multipleChoice = [
//     {
//         question: "Where does the 1968 George Romero film, 'Night of the Living Dead,' take place?",
//         answerChoices: ["Washington", "Montana", "New York", "Pennsylvania"],
//         answer: "3",
//         image: "assets/images/nightoftheliving.jpg"
// },  {
//         question: "In the movie, 'Zombieland,' Woody Harrelson's character's name was?",
//         answerChoices: ["Skates", "Tallahassee", "Jack", "Columbus"],
//         answer: "1",
//         Image: "assets/images/Zombieland2.jpg"
// },  {
//         question: "What zombie films are based off of a video game series?",
//         answerChoices: ["Dead Zone", "War Z", "Resident Evil", "Day of the Dead"],
//         answer: "2",
//         image: "assets/images/videogame.jpg"
// },  {
//         question: "What do zombies eat?",
//         answerChoices: ["Birds", "Brains", "Toes", "Plastic"],
//         answer: "1",
//         image: "assets/images/zombies2.jpg"
// },  {
//         question: "In the show, 'The Walking Dead,' who saved Rick in Atlanta?",
//         answerChoices: ["Daryl", "Andrea", "Glen", "Carol"],
//         answer: "2",
//         image: "assets/images/rick.jpg"
// },  {
//         question: "The movie, 'Resident Evil,' took place in an underground researh facility, known as the hive. What is the name of the facility's artificial intelligence?",
//         answerChoices: ["Red Queen", "Falkor", "Zombinator", "A.I."],
//         answer: "0",
//         image: "assets/images/red_queen.jpg"
// },  {
//         question: "What is the name of the characters hangout spot in the movie, 'Shaun of the Dead?'",
//         answerChoices: ["Three Sheets", "Colebrooke Row", "The Winchester", "The Hops and Glory"],
//         answer: "2",
//         image: "assets/images/Shaun-of-the-Dead-sequel.jpg"
// },  {
//         question: "In the movie, '28 Days Later,' what is the name of the virus that caused the zombie outbreak?",
//         answerChoices: ["A Virus", "Z Strain", "Rage Virus", "T Strain"],
//         answer: "2",
//         image: "assets/images/28days.jpeg"
// }];






// New screen STARTS the TIMER, counting down (120 sec.) //

function start() {
    if (!clockRunning) {
    setInterval(count(), -120000);
    clockRunning = true;
}
}



// Only ONE available choice can be selected from the answers to each question //

// CORRECT answer(s) are added to the counter displayed at the end of the game //


// function counts () {
//         if (totalScore === random) {
//             wins++;
//             $("#wins").html("Wins: " + wins);
//             console.log(wins);
//             totalScore = 0;
//             resetGame()
//         }
    
    // The player LOSSES if their score IS NOT EQUAL to the random number generated at the beginning //
//         else if (totalScore > random) {
//             losses++;
//             $("#losses").html("Losses: " + losses);
//             console.log(losses);
//             totalScore = 0;
//             resetGame()
//        }
//     }







function correct() {
}

// INCORRECT answer(s) are added to the counter displayed at the end of the game //

function incorrect() {

}

// UNANSWERED question(s) are added to the counter displayed at the end of the game //

function unanswered() {

}

// If DONE BUTTON is clicked, it displays a new screen //

// The new screen displays, GAME OVER and the users correct/incorrect/unanswered tally //

// If the timer runs out before the user clicks the DONE BUTTON, a new screen will display, 
// GAME OVER and the users correct/incorrect/unanswered tally //

});