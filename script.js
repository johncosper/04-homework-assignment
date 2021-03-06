var secondsLeft = 60;
var timerInterval;

function setTime() {
    
    timerInterval = setInterval(function() {
        
        secondsLeft--;
       
        timeLeft.textContent = `${secondsLeft}`;
        
        if (secondsLeft <= 0) {
            
            endOfQuiz();
            return;
        }
    
    }, 1000);

}

var timeLeft = document.getElementById('time-left')
var startButton = document.getElementById('start-btn')
var restartButton = document.getElementById('restart-btn')
var nextButton = document.getElementById('next-btn')
var highscoreButton = document.getElementById('highscore-btn')
var submitButton = document.getElementById('highscore-submit')
var clearButton = document.getElementById('clear-button')
var questionContainerElement = document.getElementById('question-container')
var highscoreElement = document.getElementById('highscore')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var currentScore = document.getElementById('current-score')
var intialsInput = document.getElementById('intials')
var highscoreList = document.getElementById('highscore-list')
var score = 0

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
restartButton.addEventListener('click', restart)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})
highscoreButton.addEventListener('click', function(){
    highscoreElement.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    startButton.classList.remove('hide')
    highscoreButton.classList.add('hide')
    submitButton.classList.remove('hide')
    clearButton.classList.remove('hide')
    startButton.innerText = 'Restart'
})
submitButton.addEventListener('click', function() {
    var node = document.createElement("LI")
    var textnode = document.createTextNode(intialsInput.value + ' - ' + score)     
    node.appendChild(textnode)   
    document.getElementById("highscore-list").appendChild(node)
    return;
})
clearButton.addEventListener('click', function() {
    var noNode = document.getElementById('highscore-list')
    noNode.removeChild(noNode.childNodes[0])
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score = 0
    currentScore.innerText = score
    secondsLeft = 60
    setTime()
    timeLeft.innerText = secondsLeft
    questionContainerElement.classList.remove('hide')
    highscoreButton.classList.add('hide')
    setNextQuestion()
}

function restart() {
    startButton.classList.remove('hide')
    questionContainerElement.classList.add('hide')
    highscoreButton.classList.add('hide')
    restartButton.classList.add('hide')
    endOfQuiz()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
    var button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    if (selectedButton.dataset.correct) {
      score++
      currentScore.innerText = score
    } else {
        secondsLeft = secondsLeft - 10
    }
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        highscoreButton.classList.remove('hide')
        restartButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function endOfQuiz() {
    clearInterval(timerInterval)
}

var questions = [
  {
        question: 'When building an array, which syntax is used?',
        answers: [
            { text: '[]', correct: true },
            { text: '()', correct: false },
            { text: '{}', correct: false },
            { text: '<>', correct: false },
        ]
  },
  {
        question: 'When saving your javascript file you must save it as...',
        answers: [
            { text: '.html', correct: false },
            { text: '.css', correct: false },
            { text: '.js', correct: true },
            { text: '.pdf', correct: false }
        ]
  },
  {
        question: 'How would you intialize javascript on your html page?',
        answers: [
            { text: '<style>', correct: false },
            { text: '<script>', correct: true },
            { text: '<head>', correct: false },
            { text: '<span>', correct: false }
        ]
  },
  {
        question: 'If you want a variable to be unchangeable you would use...',
        answers: [
            { text: 'var', correct: false },
            { text: 'const', correct: true },
            { text: 'let', correct: false },
            { text: 'function', correct: false },
        ]
  },
  {
        question: 'To access the child element of an object you would use...',
        answers: [
            { text: '/', correct: false },
            { text: ';', correct: false },
            { text: '+', correct: false },
            { text: '.', correct: true },
        ]
  },
]