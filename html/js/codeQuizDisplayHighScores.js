function populateScore()
{   
    var highScore = "";
    highScore += localStorage.getItem("totalScore"); 
    var highScoreDiv = document.getElementById("highScore");
    highScoreDiv.innerHTML = highScore;
}