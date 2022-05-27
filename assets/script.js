// created an area of objects so i can then fill desired areas with content of a said index position

var questions = [{
    thequestion: "Can I figure out this assignment?",
    options: ["yes", "no", "maybe"],
    correct: "yes"
},
{
    thequestion: "Will my fellow classmates figure out this assignment?",
    options: ["yes", "no", "maybe"],
    correct: "maybe"

},
{
    thequestion: "Will central grading give me any thing lower than an A for this assignment?",
    options: ["yes", "no", "maybe"],
    correct: "no"
}, {
    thequestion: "In baseball, how many strikes are in an out?",
    options: ["one", "two", "three"],
    correct: "three"
}, {
    thequestion: "Do you want the quiz to be over",
    options: ["yes", "no", "maybe"],
    correct: "yes"
},];

// declared all my variables. this allowed me to delegate states and assign operation to html elements

var homeEl = document.getElementById("home");
var quizEl = document.getElementById("quiz");
var questionEl = document.getElementById("questions");
var endEl = document.getElementById("end");
var scoreEl = document.getElementById("scorePage");
var hiEl = document.getElementById("hiPage");
var startBtn = document.getElementById("startBtn");
var userInitial = document.getElementById("userInitial");
var quizQuestion = document.getElementById("theQuestion");
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var questionPosition = 0;
var userScore = 0;

var startTime = 0;
var timer;

// all of page states and my timer function

HomeState();

function HomeState() {
    homeEl.style.display = "block";
    quizEl.style.display = "none";
    endEl.style.display = "none";
    scoreEl.style.display = "none";
    hiEl.style.display = "none";
    userScore = 0
}

function questionState() {

    homeEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    scoreEl.style.display = "none";
    hiEl.style.display = "none";
    begin();


}
function begin() {
    startTime = 30;
    document.getElementById("secondsLeft").textContent = startTime;
    var timer = setInterval(function () {
        startTime--;

        document.getElementById("secondsLeft").textContent = startTime;
        if (startTime <= 0) {
            clearInterval(timer);
            scoreScreen();
        }
    }, 1000);

    newQuestion();
}

function newQuestion() {
    homeEl.style.display = "none";
    quizEl.style.display = 'block';
    endEl.style.display = "none";
    scoreEl.style.display = "none";
    hiEl.style.display = "none";

    // filling desired area with content found from array
    quizQuestion.textContent = questions[questionPosition].thequestion;
    btnA.textContent = questions[questionPosition].options[0];
    btnB.textContent = questions[questionPosition].options[1];
    btnC.textContent = questions[questionPosition].options[2];

    if (questionPosition === questions.length) {
        lastQuestion();
    }
};

function lastQuestion() {
    homeEl.style.display = "none";
    quizEl.style.display = 'block';
    endEl.style.display = "none";
    scoreEl.style.display = "none";
    hiEl.style.display = "none";


    quizQuestion.textContent = questions[4].thequestion;
    btnA.textContent = questions[4].options[0];
    btnB.textContent = questions[4].options[1];
    btnC.textContent = questions[4].options[2];
};

function endGame() {
    homeEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = "block";
    scoreEl.style.display = "block";
    hiEl.style.display = "none";
    clearInterval(timer);
    document.getElementById("userScore").textContent = userScore;

}

function scoreScreen() {
    homeEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = "none";
    scoreEl.style.display = "block";
    hiEl.style.display = "block";
    saveFingScores();

}

// This is the function i used to save my score and initials to local storage as well as
// displaying ot the screen
function saveFingScores() {
    var savedScores = JSON.parse(localStorage.getItem("previousScores")) || [];
    console.log(savedScores);


    var statBoard = {
        initials: userInitial.value,
        score: userScore
    };
    savedScores.push(statBoard);
    console.log(statBoard);
    var strOfScores = JSON.stringify(savedScores);
    console.log(strOfScores);
    window.localStorage.setItem("previous", strOfScores);

    document.getElementById("highScores").textContent = strOfScores;

}

// all of my Event Listeners, all but one delegate state
startBtn.addEventListener("click", function () {
    questionState();
});


// this delegates state as well but it also checks users selection with correct answer 
// found in Array. It then either adds to score ore takes away from time based on a 
// correct or incorerct answer
questionEl.addEventListener("click", function (event) {
    var element = event.target
    if (element.matches("button")) {
        if (questions[questionPosition].correct ===
            element.textContent) {
            userScore += 5;
        } if (questions[questionPosition].correct !==
            element.textContent) {
            startTime -= 5;
        }



    }
    if (quizQuestion.textContent == questions[4].thequestion) {
        endGame();
    } else {
        questionPosition++;
        newQuestion();
    }


});


endEl.addEventListener("click", function (event) {
    var element2 = event.target
    if (element2.matches("button")) {



        scoreScreen();
    }
}

);

hiEl.addEventListener("click", function (event) {
    var element3 = event.target
    if (element3.matches("button")) {
        HomeState();
    }
});
