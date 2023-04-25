//define a list of variables
var currentQuestionIndex = 0;
var currentTime = 60;
var score = 0;
//create an array of questions for the user to answer with a list of choices
var quizQuestions = [
  {
    question: "Which file do you create the styling in?",
    choices: ["html", "css", "Javascript"],
    answer: "css",
  },
  {
    question: "What is a programmers  best friend?",
    choices: ["A keyboard", "the mouse", "google", "A Mentor"],
    answer: "google",
  },
  {
    question: "Who's the real genuis from the 80's 90's tech boom?",
    choices: ["Bill Gates", "Steve Jobs", "Steve Woz Wozniak"],
    answer: "Steve Woz Wozniak",
  },
];
//define the array  of questions with a query selector
var quizSelector = document.querySelector("quiz-container");
console.log(quizSelector);

//Elements form html to be updated during the game
var quizContainerEl = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var scoreEl = document.getElementById("score");
var responseEl = document.getElementById("response");
var initialsEl = document.getElementById("initials");
var startButtonEl = document.getElementById("start");
var timerEl = document.getElementById("time");
var saveNowBtn = document.getElementById("save-now");
var welcome = document.getElementById("welcome");

//Create a function so when the user clicks the start button the timmer starts for the quiz
function startQuiz() {
  startButtonEl.style.display = "none";
  welcome.style.display = "none";
  //have the quiz container pop up once start is clicked
  quizContainerEl.style.display = "block";
  startTimer();
  displayQuestion();
}

//make a function to display the questionss and update the choices with current question
function displayQuestion() {
  if (currentQuestionIndex === quizQuestions.length) {
    return;
  }
  questionEl.textContent = "";
  questionEl.textContent = quizQuestions[currentQuestionIndex].question;
  choicesEl.innerHTML = "";
  for (var i = 0; i < quizQuestions[currentQuestionIndex].choices.length; i++) {
    var choiceEl = document.createElement("button");
    choiceEl.textContent = quizQuestions[currentQuestionIndex].choices[i];
    choiceEl.setAttribute("class", "choice");
    choiceEl.setAttribute(
      "value",
      quizQuestions[currentQuestionIndex].choices[i]
    );
    choicesEl.appendChild(choiceEl);
    //create a event listen function to check answer beofre moving to next question
    choiceEl.addEventListener("click", function (event) {
      if (
        event.target.textContent === quizQuestions[currentQuestionIndex].answer
      ) {
        score++;
        var responseEl = document.getElementById("response");
        responseEl.textContent = "Correct!!";
      } else {
        time -= 10;
        var responseEl = document.getElementById("response");
        responseEl.textContent = "Wrong choice!";
      }
      currentQuestionIndex++;
      displayQuestion();
    });
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
function startTimer() {
  timerEl.textContent = currentTime;
  var timerInterValid = setInterval(() => {
    currentTime--;
    timerEl.textContent = currentTime;
    if (currentTime <= 0 || currentQuestionIndex === quizQuestions.length) {
      clearInterval(timerInterValid);
      endQuiz();
    }
  }, 1000);
}

//create a function to end the quiz
function endQuiz() {
  quizContainerEl.style.display = "none";
  var scoreContainerEl = document.getElementById("score-container");
  scoreContainerEl.style.display = "block";
  scoreEl.textContent = score;
}
//make a function to save the users score
function saveScore(e) {
  e.preventDefault();
  var initialsInputEl = document.getElementById("initials");
  var initials = initialsInputEl.value.trim().toUpperCase();
  if (initials !== "") {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials: initials, score: score });
    localStorage.setItem("highScores", JSON.stringify(highScores));
  }
  window.location.href = "highscores.html";
}
startButtonEl.addEventListener("click", startQuiz);
saveNowBtn.addEventListener("click", saveScore);
