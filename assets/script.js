var timerEl = document.getElementById('countdown');
var answersEl = document.getElementById('answers-holder');
var questionEl = document.getElementById('prompt-holder');

var timeLeft = 5;
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
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            // call function that brings up highscore input
            endQuiz()
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

    for (var i = 0; i < 1; i++) {
        for ( var j = 0; j < currentChoices.length; j++) {
            console.log(currentChoices[j])
            var answerButtons = document.createElement("button");
            answerButtons.textContent = currentChoices[j];
            answersEl.appendChild(answerButtons);
        }
        
    }

    //iterate through our choices
    //create a button
    //add event listener to check answer
    //append it to the answer-holder
    //

}

function checkAnswer(event){
    event.preventDefault()
    console.log(event)
    console.log(event.target)
    var correctAnswer = quizBank[index].correctAnswer
    console.log(correctAnswer)
        if (correctAnswer) {
        answersEl[i].style.color = 'lightgreen';
    } else {
        answersEl[i].style.color = 'red';
        timeLeft-= 5;
    }
    if(index === quizBank.length -1){
        endQuiz()
        return
    }
    index ++
    showQuizQuestion()
}

function endQuiz(){
    console.log("ending quiz")
    var quizEl = document.getElementById('quiz-box');
    quizEl.classList.add('hide');
    var endEl = document.getElementById('end-quiz-box');
    endEl.classList.remove('hide');
}

document.getElementById("start-button").addEventListener("click", startQuiz)