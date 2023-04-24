//define a list of variables
var currentQuestionIndex = 0;
var time = 60;
var score = 0;
var timerInterval;
//create an array of questions for the user to answer with a list of choices
var quizQuestions = [
{
    question: "Which file do you create the styling in?",
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
    var startButtonEl = document.getElementById("start-button");
    startButtonEl.style.display="none";
   //have the quiz container pop up once start is clicked
   var quizContainerEl = document.getElementById("quiz-container");
    quizContainerEl.style.display = "block";  
    //have the timeer start for the quiz
    timerInterval = setInterval(function(){
        time--;
        var timeEl = document.getElementById("time");
        timeEl.textContent = time;
        if (time<=0) {
            endQuiz();
        }
    },1000); 
}


//make a function to display the questionss and update the choices with current question
function displayQuestion () {
    var questionEl = document.getElementById("question");
    questionel.textContent = quizQuestions[currentQuestionIndex].question;
    var choicesEl =document.getElementById("choices");
    choicesEl.innerHTML = "";
    for (var i = 0; i< quizQuestions[currentQuestionIndex].choices.length; i++){
        var choiceEl = document.createElement("button");
        choiceEl.textContent = quizQuestions[currentQuestionIndex].choices[i];
        choiceEl.setAttribute("class", "choice");
        choiceEl.setAttribute("value", quizQuestions[currentQuestionIndex].choices[i]);
        choiceEl.onclick = checkAnswer;
        choicesEl.appendChild(choiceEl);
    }
}
//create a function to check answer beofre moving to next question
function checkAnswer() {
    if (this.value === quizQuestions[currentQuestionIndex].answer) {
        score++;
        var responseEl = document.getElementById("response");
        responseEl.textContent = "Correct!!";
    } else {
        time -= 10;
        var responseEl = document.getElementById("response");
        responseEl.textContent = "Wrong choice!";
    }
    currentQuestionIndex++;
    if (currentQuestionIndex=== quizQuestions.length) {
        endQuiz();
    } else {
        displayQuestion();
    }
}
/*//make a function to hangle a choice click event
function handleChoiceClick(event) {
    var choice = event.target.textContent;
    var currentQuestion = quizQuestions[currentQuestionIndex];
if (choice === currentQuestion.answer){
    responseEl.textContent = "Correct!";
    score += 10;
} else {
    response.textContent = "Incorrect!";
    time -= 10;
}
//Then the user is presented with another question or quiz is over
currentQuestionIndex++;
if (currentQuestionIndex<quizQuestions.length){
    displayQuestion();
} else {
    endQuiz();
}
}  */
// create function so timer starts when i clock the start quiz button.
function startTimer(){
    timerEl.textContent= time;
    timerInterValid = setInterval(() => {
        time--;
        time.textContent = time;
        if (time <= 0) {
            clearInterval(timerInterValid);
            endQuiz();
        } 
    }, 60000) }


//create a function to end the quiz
function endQuiz(){
    clearInterval(timerInterValid);
    var quizContainerEl = document.getElementById("quiz-container");
    quizContainerEl.style.dislpay="none";
    var scoreContainerEl = document.getElementById("score-container");
    scoreContainerEl.style.display = "block";

    var scoreEl = document.getElementById("score");
    scoreEl.textContent = score;
}
function saveScore(event) {
    event.preventDefault();
    var initialsInputEl = document.getElementById("initials");
    var initials = initialsInputEl.value.trim().toUpperCase();
}

