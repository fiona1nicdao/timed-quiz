// variables
var timeEl = document.querySelector(".timer")
var secondsLeft = 150;
var startquizButton = document.querySelector(".start")
var activeIntro = document.querySelector('.activeIntro')
var activeQuestion = document.querySelectorAll(".activeQuestion")
var hideQue = document.querySelector('.hideQuestion')
var hideRes = document.querySelector('.hideResults')
var finalScoreEl = document.querySelector('.finalScore')
var questionEl = document.querySelector('.questionText')
var answersEl = document.querySelector('.answerList')
var feedback = document.querySelector(".feedback")
var initialsEl = document.querySelector('.initals')
var submitScore = document.querySelector('.sumbitScore')


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
// function Results/ GameOver 
function sendResults() {
    hideQue.setAttribute('class','hideQuestion');
    hideRes.setAttribute('class','activeResults');
    finalScoreEl.innerHTML =("Your final score is " + secondsLeft +".");
}
// function/click to start game 
startquizButton.addEventListener("click", startQuiz);
function startQuiz() {
    console.log('check start');
    activeIntro.setAttribute('class','hide');
    hideQue.setAttribute('class','activeQuestion');
    showQuestion()
}
// show each question and answers 
var x = 0
function showQuestion() {
    console.log("check question");
    var currentQuestion = questions[x];
    questionEl.textContent = currentQuestion.question;

    answersEl.innerHTML = "";
    currentQuestion.answer.forEach(function(choice, i){
        var btn3 = document.createElement('button');
        btn3.setAttribute('class','btn3');
        btn3.setAttribute('value', choice);
        btn3.textContent = choice;
        btn3.onclick = chooseAnswer;
        answersEl.appendChild(btn3);
    });
}
// User choose right or wrong answer
function chooseAnswer() {
    console.log("check answer")
    if (this.value !== questions[x].correctAnswer) {
        secondsLeft -= 10;
        if (secondsLeft <0) {
            secondsLeft = 0;
        }
        timeEl.textContent = secondsLeft
        feedback.textContent = "wrong!";
        feedback.style.color ="red";
    } else {
        feedback.textContent = "right!";
        feedback.style.color ="green";
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
// function to store the scores 
submitScore.addEventListener("click", storeScore);
function storeScore() {
    var initial = initialsEl.value.trim();

    if (initial !== "") {
        var highscores = 
        JSON.parse(window.localStorage.getItem("scores")) || [];
        var newScore = {
            score: secondsLeft,
            initials: initial 
        };
        highscores.push(newScore);
        window.localStorage.setItem("scores", JSON.stringify(highscores));
        window.location.href ="./score/indexS.html";
    }
}
// an array of questions, answers, and correct answer
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
