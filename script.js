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

//Elements form html to be updated during the game
var quizContainerEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var scoreEl = document.getElementById("score");
var responseEl = document.getElementById("response");
var initialsEl = document.getElementById("initials");

//Create a function so when the user clicks the start button the timmer starts for the quiz
function startQuiz() {
    scoreContainerEl.style.display = "none";
    quizContainerEl.style.display = "block";  
    displayQuestion();
    startTimer();
}

//make a function to display the questionss and update the choices with current question
function displayQuestion (){
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i< currentQuestion.choices.length; i++){
        var choice = currentQuestion.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", handleChoiceClick);
        choicesEl.appendChild(choiceButton);
    }
}
//make a function to hangle a choice click event
function handleChoiceClick(event) {
    const choice = event.target.textContent;
    const currentQuestion = quizQuestions[currentQuestionIndex];
if (choice === currentQuestion.answer){
    responseEl.textContent = "Correct!";
    score += 10;
} else {
    responseEl.textContent = "Incorrect!";
    time -= 10;
}
}  
// create function so timer starts when i clock the start quiz button.
function startTimer(){
    timerEl.textContent= time;
    
}
const startingTime = 60;
let time = startingTime;


// Make a variable to keep track of users score
let currentQuestionIndex=0;
let score=0;
//Then the user is presented with another question