//you can set this to whatever, for debugging later you can set it to something either very low or very high
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

var quizQuestions = [{
    
    question: "question 1",
    
        respOptions: [
            "option a",
            "option b",
            "option c",
            "option d"
    ],
    
    answer: "option c"
},
{
    question: "question 2",
    
    respOptions: [
        "option a",
        "option b",
        "option c",
        "option d"
    ],
    
    answer: "option c"
},
{
    question: 'question 3',

    respOptions: [
        'option a',
        'option b',
        'option c',
        'option d'
    ],

    answer: 'option c'
},
{
    question: 'question 4',

    respOptions: [
        'option a',
        'option b',
        'option c',
        'option d'
    ],

    answer: 'option c'
},
{
    question: 'question 5',

    respOptions: [
        'option a',
        'option b',
        'option c',
        'option d',
    ],

    answer: 'option c'
},
]

var submitBtn = document.getElementById('subBtn');