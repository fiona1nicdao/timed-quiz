// variables 
var clear = document.querySelector(".clear")

// function to display scores 
function displayScore(){
    console.log("haha")
    var highscores = 
        JSON.parse(window.localStorage.getItem("scores")) || [];
    
    highscores.sort(function(x,y){
        return y.score - x.score;
    });
    highscores.forEach(function(score){
        var liEl =document.createElement('li');
        liEl.textContent =score.initials + "-" +score.score;
        var order = document.querySelector('.order');
        order.appendChild(liEl);
    })
}
displayScore();

// function/ click to clear scores 
clear.addEventListener('click', clearScores);
function clearScores() {
    window.localStorage.removeItem('scores')
    window.location.reload();
}