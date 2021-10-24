// variables
var timeEl = document.querySelector(".timer");
var mainEl = document.querySelector(".main");
var secondsLeft = 100;
var startquizButton = document.querySelector(".start");
var activeIntro = document.querySelector('.activeIntro')
var activeQuestion = document.querySelectorAll(".activeQuestion")
var hideQue = document.querySelector('.hideQuestion')
var hideRes = document.querySelector('.hideResults')
var finalScoreEl = document.querySelector('.finalScore')
var questionEl = document.querySelector('.questionText')
var answersEl = document.querySelector('.answerList')
var btnA = document.getElementById("#btnA")
// var btnB = document.getElementById("#btnB")
// var btnC = document.getElementById("#btnC")
// var btnD = document.getElementById("#btnD")
var feedback = document.querySelector(".feedback")

// timer function
startquizButton.addEventListener("click", setTime);
function setTime() {
    var timerInterval = setInterval(function(){
        console.log("timer interval",timerInterval)
        secondsLeft --;
        timeEl.textContent = "Time: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendResults();
        }
    },1000);
}
// function for out of time  
function sendResults() {
    hideQue.setAttribute('class','hideQuestion');
    hideRes.setAttribute('class','activeResults');
    finalScoreEl.innerHTML =("Your final score is " + secondsLeft +".");
}
// start game 
startquizButton.addEventListener("click", startQuiz);
function startQuiz() {
    console.log('click');
    activeIntro.setAttribute('class','hide');
    hideQue.setAttribute('class','activeQuestion');
    showQuestion()
}
// show each question and answers 
var x = 0
function showQuestion() {
    console.log("hello");
    var currentQuestion = questions[x];
    questionEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";
    currentQuestion.answer.forEach(function(choice, i){
        var btn3 = document.createElement('button');
        btn3.setAttribute('class','btn3');
        btn3.setAttribute('value', choice);
        btn3.textContent = i +1 + "." + choice;
        btn3.onclick = chooseAnswer;
        answersEl.appendChild(btn3);
    });


}
// User choose right or wrong answer
var btn2El = document.querySelectorAll('.btn2')

function chooseAnswer() {
    console.log("what up")
    if (this.value !== questions[x].correctAnswer) {
        secondsLeft -= 10;
        if (secondsLeft <0) {
            secondsLeft = 0;
        }
        timeEl.textContent = secondsLeft
        feedback.textContent = "wrong!";
    } else {
        feedback.textContent = "right!";
    }
    feedback.setAttribute('class', 'feedback1');

    x++
    if (x === questions.length) {
        sendResults();
        timeEl.setAttribute('class','hide');
    }
    else {
        showQuestion()
    }
}


// an array of questions with objects answers 
var questions = [
    {
        question:'What is the correct definition for JavaScript?',
        answer:[
            'A) code to structure a website and its content',
            'B) code to style website content',
            'C) progamming language that adds interactivity to your website',
            'D) a type of coffee'
        ],
        correctAnswer: 'C) progamming language that adds interactivity to your website'
    },
    {
        question: 'Which is NOT a data type',
        answer: [
            'A) boolean',
            'B) string',
            'C) object',
            'D) abbreviation'
        ],
        correctAnswer:'D) abbreviation'    
    },
    {
        question: 'What is the correct defintion of an array?',
        answer: [
            'A) a way to store groups of data in a single variable',
            'B) a coding language',
            'C) have two values: true or false',
            'D) a series of characterss surrounded by quotes'
        ],
        correctAnswer: 'A) a way to store groups of data in a single variable'
    },
    {
        question: 'A useful tool used during development and debugging for printing content to the debugger is',
        answer: [
            'A) Javascript',
            'B) terminal/ bash',
            'C) for loops',
            'D) console.log'
        ],
        correctAnswer: 'D) console.log'
    },
    {
        question: 'The condition in an if/else statement is enclosed within ___.',
        answer: [
            'A) quotes',
            'B) curly brackets',
            'C) parenthesis',
            'D) sqaure brackets',
        ],
        correctAnswer: 'B) curly brackets'
    },
]
