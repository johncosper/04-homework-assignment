var secondsLeft = 120;

function setTime() {
    
    var timerInterval = setInterval(function() {
        
        secondsLeft--;
       
        timeLeft.textContent = `Time Remaining: ${secondsLeft} seconds`;
        
        if (secondsLeft <= 0 || quizOver) {
            
            if (scoreHistory.length !== 0) {
                document.getElementById("view-scores").removeAttribute("disabled");
            }
            timeLeft.textContent = "";
            clearInterval(timerInterval);
            endOfQuiz();
        }
    
    }, 1000);

}

var startBtn = document.getElementById('startBtn');
var questionContainer = document.getElementById('question-container');

startBtn.addEventListener('click', start)

function start() { 
startBtn.classList.add('hide');
questionContainer.classList.remove('hide');
nextQuestion()
}

var questions = [
    {
        question: 'when building an array which syntax is used?',
        answers: [
            { text: '()', correct: false},
            { text: '{}', correct: false},
            { text: '[]', correct: true},
            { text: '<>', correct: false},
        ],

        question: ''
    }
]

function nextQuestion() {

}

function selectAnswer() {

}