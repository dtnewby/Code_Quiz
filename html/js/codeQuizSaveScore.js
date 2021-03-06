var submitBtn = document.getElementById("submitInitials");
var totalScore = localStorage.getItem("totalScore");

function populateScore()
{    
    var scoreDiv = document.getElementById("score");
    scoreDiv.innerHTML = totalScore;
}

function saveScore()
{
    var initials = document.getElementById("initials");
    var initialsStr = "" + initials.value;

    if (initialsStr.length < 1)
    {
        alert("Please enter your initials.");
        return;
    }

    localStorage.setItem(initialsStr, totalScore);

    setTimeout(function() { window.location.href = "codeQuizDisplayHighScores.html"; }, 1000);   
}

submitBtn.addEventListener("click", saveScore);