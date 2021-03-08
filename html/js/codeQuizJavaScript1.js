var question = document.getElementById("question");
var btn1 = document.getElementById("button1");
var btn2 = document.getElementById("button2");
var btn3 = document.getElementById("button3");
var btn4 = document.getElementById("button4");
var feedbackArea = document.getElementById("feedbackArea");
var score = document.getElementById("score");

var totalScore = 0;

var qAndA = { question: "In JavaScript, which of the following loops is always executed at least once?", 
answer1: "1-While Loop", answer2: "2-For Loop", answer3: "3-Do While Loop", answer4: "4-Harrison Loop", rightAnswer: "button3" };

function populatePage() 
{
    score.textContent = "" + totalScore;

    // Dynamically add Question.
    question.textContent = qAndA.question;

    // Dynamically add answers to buttons.
    btn1.textContent = qAndA.answer1;
    btn2.textContent = qAndA.answer2;
    btn3.textContent = qAndA.answer3;
    btn4.textContent = qAndA.answer4;
}

function gradeAnswer(event) 
{
    var whichBtnClicked = "" + event.target.id;

    if (whichBtnClicked === qAndA.rightAnswer)
    {
        totalScore += 20;
        feedbackArea.textContent = "Correct!"
    }
    else
    {
        totalScore -= 20;
        feedbackArea.textContent = "Incorrect!"
    }

    score.textContent = totalScore;
    
    // Write totalscore to local storage
    localStorage.setItem("totalScore", totalScore);

    // Pause for 3 seconds.  Then, go to the next page of the quiz.
    setTimeout(function() { window.location.href = "codeQuizPage2.html"; }, 1000);    
}

btn1.addEventListener("click", gradeAnswer);
btn2.addEventListener("click", gradeAnswer);
btn3.addEventListener("click", gradeAnswer);
btn4.addEventListener("click", gradeAnswer);