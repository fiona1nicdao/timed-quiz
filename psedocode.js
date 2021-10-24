// btnA.innerHTML = questions[x].answer[0];
        // btnB.innerHTML = questions[x].answer[1];
        // btnC.innerHTML = questions[x].answer[2];
        // btnD.innerHTML = questions[x].answer[3];

    // document.querySelector('.button').removeChild(document.querySelector('.button').childNodes[0])
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

var x = 0
function showQuestion() {
    console.log("hello");
    if (x < questions.length) {
        for (var i=0; i< questions.length; i++) {
            questionEl.innerHTML = questions[x].question;   
        }
        for (var i=0; i< questions[x].answer.length; i++) {
            var button2 = document.createElement('button');
            button2.textContent =questions[x].answer[i];
            answersEl.appendChild(button2);
            button2.classList.add('btn2')
            document.querySelector('.btnA').remove();
        }
    } 
    else {
        sendResults();
    }

}
// User choose right or wrong answer
var btn2El = document.querySelectorAll('.btn2')

function chooseAnswer(event) {
    console.log("what up")
    if (x >= questions.length){
        sendResults();
        clearInterval(timerInterval);
    }
    else {
        if (event === questions[x].correctAnswer) {
            feedback.textContent = "Right!";
        }
        else {
            secondsLeft -= 10;
            feedback.textContent = "Wrong!";
        }
    } 
    x++;
    showQuestion();
}

var btnQ = document.body.children[2].children[1].children[0,1,2,3]
btnQ.addEventListener('click', function(event){
    var event = event.target;
    chooseAnswer(event.textContent);
});
