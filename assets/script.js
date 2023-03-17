var timerEl = document.getElementById('countdown');
var answersEl = document.getElementById('answers-holder');
var questionEl = document.getElementById('prompt-holder');
var scoreEl = document.getElementById('highscore-input');
var printEl = document.getElementById('print-score');
var submitEl = document.getElementById('submit-btn');
var ListEl = document.getElementById('score-list');
var storeEl = document.getElementById('score-box');
var formEl = document.getElementById('form');
var highscoreBtn = document.getElementById('highscore-btn');
//var openingBoxEl = document.getElementById('opening-box');

var timeInterval;
var saveTime;
var timeLeft = 60;
var index;

var quizBank = [
{
    prompt: "What does CSS stand for?",
    choices: ["Compact Style Sheets", "Cascading Style Sheets", "Control Standard Styling", "Core Style Simplified"],
    correctAnswer: "Cascading Style Sheets"
},
{
    prompt: "The condition in an if/else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "square brackets", "parenthesis"],
    correctAnswer: "parenthesis"
},
{
    prompt: "Arrays in JavaScript can be used to store",
    choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
    correctAnswer: "all of the above"
},
{
    prompt: "A very useful tool during development and debugging for printing content to the debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: "console.log"
},
{
    prompt: "JavaScript is used for:",
    choices: ["controlling multimedia", "animating images", "creating interactive content", "all of the above"],
    correctAnswer: "all of the above"
}
]
var questionNumber = 0;
var questionLength = quizBank.length;
var answerLength = quizBank[questionNumber].choices;

//timer countdown from 60 seconds
function countdown() {

    timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds remaining';

        if (timeLeft <= 0) {
            endQuiz();
        }

    }, 1000)
}

function startQuiz() {
    console.log("starting")
    //calling countdown
    countdown()
    var quizEl = document.getElementById('quiz-box');
    quizEl.classList.remove('hide');
    var startEl = document.getElementById('opening-box');
    startEl.classList.add('hide');

    //show quix section
    //unshow starting box
    index= 0
    showQuizQuestion()
}

function showQuizQuestion(){
    console.log("Showing a question!")
    // select our prompt-holder and populate it with our current question

    var currentQuestion = quizBank[index].prompt;
        questionEl.innerText = quizBank[index].prompt;
    console.log(currentQuestion);
    var currentChoices = quizBank[index].choices;
    console.log(currentChoices);
    answersEl.innerHTML = ""
        for ( var i = 0; i < currentChoices.length; i++) {
            var answerButtons = document.createElement("button");
            answerButtons.textContent = currentChoices[i];
            answersEl.appendChild(answerButtons);
            answerButtons.addEventListener("click", checkAnswer)
        }
};

function checkAnswer(event){
    //event.preventDefault()
    console.log("checking answer", event)
    //console.log(event.target)
    var correctAnswer = quizBank[index].correctAnswer
    console.log(correctAnswer)
    console.log(event.target)
        if (correctAnswer === event.target.innerText) {
        answersEl.style.backgroundColor = 'lightgreen';
        console.log("correct!");
    } else {
        answersEl.style.backgroundColor = 'red';
        timeLeft-= 5;
        console.log("incorrect :(")
    }
    if(index === quizBank.length -1){
        endQuiz()
        return
    }
    index ++
    showQuizQuestion()
}

function endQuiz(){
    //saving time on timer when quiz is over
    let saveTime = timeLeft;
    console.log(saveTime);
    //clear timer
    clearInterval(timeInterval)
    console.log("ending quiz")
    var quizEl = document.getElementById('quiz-box');
    quizEl.classList.add('hide');
    var endEl = document.getElementById('end-quiz-box');
    endEl.classList.remove('hide');
    //hiding timer once quiz is over
    var timerEl = document.getElementById('countdown');
    timerEl.classList.add('hide');
    printEl.textContent = saveTime;

    submitEl.innerHTML = ""
    //create button
    var submitBtn = document.createElement("button");
    submitBtn.textContent = "Submit";
    // append button to submitEl
    submitEl.appendChild(submitBtn);
    //"onclick" move to saveScore() function
    submitBtn.addEventListener("click", saveScore);
        if (submitBtn)
    console.log("moving to saveScore()")
};



function saveScore() {

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    let currentScore = {
        score:  document.querySelector("#print-score").textContent,
        name: scoreEl.value
    }
highScores.push(currentScore)
localStorage.setItem("highScores", JSON.stringify(highScores) )
storedScore = JSON.parse(localStorage.getItem("highScores"));
console.log(storedScore)
// "onclick" save saveTime and scoreEl
// "onclick" .add("hide") to endEl
// "onclick" .remove("hide") to storeEl
    var endEl = document.getElementById('end-quiz-box');
    endEl.classList.add('hide');
    var scoreListEl = document.getElementById('score-box');
    scoreListEl.classList.remove('hide');

    //print scores on screen
    for (i = 0; i < storedScore.length; ++i) {
        var li = document.createElement('li');
        li.innerText = `${storedScore[i].name}: ${storedScore[i].score}`;
        ListEl.appendChild(li);
    };
};

highscoreBtn.addEventListener("click", function(event) {
    var openingBoxEl = document.getElementById('opening-box');
    openingBoxEl.classList.add('hide');
    var scoreListEl = document.getElementById('score-box');
    scoreListEl.classList.remove('hide');

});


document.getElementById("start-button").addEventListener("click", startQuiz)