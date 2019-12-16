document.querySelector("#startQuiz").addEventListener("click", setTime);

var secondsLeft = 75;
var titleEl = document.querySelector(".question");
var startQuizEl = document.querySelector("#startQuiz");
var buttonEl = document.querySelectorAll(".button");
var submitEl = document.querySelector("#submit");
var initialInput = document.querySelector("#initial");
var highscoreInput = document.querySelector("timeremaining");
var submissionResponseEl = document.querySelector("#response");
var firstScreenEl = document.querySelector(".firstScreen");
var secondScreenEl = document.querySelector(".secondScreen");
var thirdScreenEl = document.querySelector(".thirdScreen");
var fourthScreenEl = document.querySelector(".fourthScreen");
var resultScreenEl = document.querySelector(".resultScreen");
var questions = [
  {
    title: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    title: "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses"
  },
];

function setTime() {
  var timerInterval = setInterval(function() {
      secondsLeft--;
    document.querySelector("#time").textContent=secondsLeft ;
    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage("Time's up! :(");
    }
  }, 1000);
}


startQuizEl.addEventListener("click", function(event) {
  event.preventDefault();
  firstScreenEl.textContent = "";
  resultScreenEl.textContent= "";
  fourthScreenEl.textContent= "";
  secondScreenEl.textContent= "Commonly used data types DO NOT Include"
});

// var currentQuestion;

// function navigate(direction) {
//   index = index + direction;
//   if (index < 0) { 
//     index = questions.length - 1;}
//   else if (index > questions.length - 1) { 
//     index = 0;}
 
// startQuizEl.onclick= function(event){
//   event.stopProgpagation();
//   navigate(1);
// };

// buttonEl.onclick=function(event){
//   event.stopProgpagation();
//   navigate(1);
// };


// StartQuEl.addEventListener("click", function(event) {
//   event.preventDefault();
//   if(event.target.matches("button")) {
//     var item = document.createElement("div");
//     item.textContent = "correct";
//     secondScreenEl.append(item);
//   }
// });

submitEl.addEventListener("click", function(event) {
    sendMessage();
    function sendMessage(){
      event.preventDefault();
      var response = "HighScores " + initialInput.value + " - ";
      submissionResponseEl.textContent = response;
      firstScreenEl.textContent = "";
      fourthScreenEl.textContent = "";
  }  
});
