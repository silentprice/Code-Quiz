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
    }) 
}


//make a function to display the questionss and update the choices with current question
function displayQuestion (){
    var currentQuestion = quizQuestions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i< currentQuestion.choices.length; i++){
        var choice = currentQuestion.choices[i];
        var choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", handleChoiceClick);
        choices.appendChild(choiceButton);
    }
}
//make a function to hangle a choice click event
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
}  
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
    quizContainerEl.style.dislpay="none";
}

