var timerEl = document.getElementById('countdown');
var timeLeft = 5;
var index;
var quizBank = [
{
    prompt: "Hello",
    choices: ["Hello", "hello1", "Hello", "hello"],
    correctAnswer: "hello1"
},
{
    prompt: "Bye",
    choices: ["Hello", "hello1", "Hello", "Bye"],
    correctAnswer: "Bye"
},
{
    prompt: "Heyyy",
    choices: ["Hello", "hello1", "hey", "hello"],
    correctAnswer: "hey"
},
{
    prompt: "Heyyy",
    choices: ["Hello", "hello1", "hey", "hello"],
    correctAnswer: "hey"
}
]

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

    var currentQuestion = quizBank[index].prompt
    console.log(currentQuestion)
    var currentChoices = quizBank[index].choices
    console.log(currentChoices)
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
    //if (it's correct){
    //     "Yay"
    // } else {
    //     timeLeft-= 5
    // }
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