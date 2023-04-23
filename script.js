//Create a function so when the user clicks the start button the timmer starts for the quiz
function startQuiz() {
    scoreContainerEl.style.display = "none";
    quizContainerEl.style.display = "block";  
}
// create function so timer starts when i clock the start quiz button.
function startTimer(){
    timerEl.textContent= time;
    
}
const startingTime = 60;
let time = startingTime;
let timerIntervalId = null;

//create an array of questions for the user to answer with a list of choices
var quizQuestions = [
{
    question: "Which file do you create styling in?",
    choices: ["html","css","Javascript"],
    answer: "css"
},
{
    question: "What is a programmers  best friend?",
    choices: ["A keyboard","the mouse","google","A Mentor"],
    answer: "google"
},
{
    question: "Who's the real genuis from the 80's 90's tech boom?",
    choices: ["Bill Gates", "Steve Jobs","Steve Woz Wozniak"],
    answer: "Steve Woz Wozniak"
}
];

//Then the user is presented with another question

//Elements form html to be updated during the game
var quizContainerEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var scoreEl = document.getElementById("score");
var responseEl = document.getElementById("response");
var initialsEl = document.getElementById("initials");