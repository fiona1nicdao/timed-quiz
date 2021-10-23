// variables
var timeEl = document.querySelector(".timer");
var mainEl = document.querySelector(".main");
var secondsLeft = 20;
var startquizButton = document.querySelector(".start");
var activeIntro = document.querySelector('.activeIntro')
var activeQuestion = document.querySelectorAll(".activeQuestion")
var hideQue = document.querySelector('.hideQuestion')
var hideRes = document.querySelector('.hideResults')
var finalScoreEl = document.querySelector('.finalScore')
var questionEl = document.querySelector('.questionText')
var answersEl = document.querySelector('.answerList')
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
    showQuestion1()
}
// show each question and corresponding answers 
function showQuestion1() {
    console.log("hello");
    questionEl.innerHTML = questions[0].question;
    for (var i=0; i< questions[0].answer.length; i++) {
        var button2 = document.createElement('button');
        button2.textContent =questions[0].answer[i].text;
        answersEl.appendChild(button2);
        button2.classList.add('btn2')
        document.querySelector('.button').remove();
    }
    // document.querySelector('.button').removeChild(document.querySelector('.button').childNodes[0])
}
var button2 = document.createElement('button');


// btn2.addEventListener("click", showQuestion2)

// function showQuestion2() {
//     console.log("bye");
//     questionEl.innerHTML = questions[1].question;
    // for (var i=0; i< questions[1].answer.length; i++) {
    //     var button3 = document.createElement('button');
    //     button3.textContent =questions[1].answer[i].text;
    //     answersEl.appendChild(button3);
    //     document.querySelector('.button').remove();
    // }
    // document.querySelector('.button').removeChild(document.querySelector('.button').childNodes[0])
// }


// an array of questions with objects answers 
var questions = [
    {
        question:'What is the correct definition for JavaScript?',
        answer:[
            {text:'A) code to structure a website and its content', wrong: false},
            {text:'B) code to style website content', wrong: false},
            {text:'C) progamming language that adds interactivity to your website', correct: true},
            {text:'D) a type of coffee',wrong: false}
            // C is correct
        ]
    },
    {
        question:'Which is NOT a data type',
        answer:[
            {text:'A) boolean',wrong: false},
            {text:'B) string',wrong: false},
            {text:'C) object',wrong: false},
            {text:'D) abbreviation', correct: true}
            // D is correct
        ]
    },
    {
        question:'What is the correct defintion of an array?',
        answer:[
            {text:'A) a way to store groups of data in a single variable',correct: true},
            {text:'B) a coding language',wrong: false},
            {text:'C) have two values: true or false',wrong: false},
            {text:'D) a series of characterss surrounded by quotes',wrong: false}
            // A is correct
        ]
    },
    {
        question:'A useful tool used during development and debugging for printing content to the debugger is:',
        answer:[
            {text:'A) Javascript',wrong: false},
            {text:'B) terminal/ bash',wrong: false},
            {text:'C) for loops',wrong: false},
            {text:'D) console.log',correct: true}
            // D is correct
        ]
    },
    {
        question:'The condition in an if/else statement is enclosed within ___.',
        answer:[
            {text:'A) quotes',wrong: false},
            {text:'B) curly brackets',correct: true},
            {text:'C) parenthesis',wrong: false},
            {text:'D) square brackets',wrong: false}
            // B is correct
        ]
    }
]