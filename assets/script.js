var questions = [{
    thequestion: "Can I figure out this assignment?",
    options:["yes", "no", "maybe"],
    correct:"yes"
},
{ thequestion:"Will my fellow classmates figure out this assignment?",
    options:["yes", "no", "maybe"],
    correct:"maybe"

},
{
    thequestion:"Will central grading give me any thing lower than an A for this assignment?",
    options:["yes", "no", "maybe"],
    correct:"no"
},{
    thequestion:"In baseball,how many strikes are in an out?",
    options:["one", "two", "three"],
    correct:"three"
},{
    thequestion:"Do you want the quiz to be over",
    options:["yes", "no", "maybe"],
    correct:"yes"
},];



var homeEl = document.getElementById("home");
var quizEl = document.getElementById("quiz");
var endEl = document.getElementById("end");
var startBtn = document.getElementById("startBtn");
// var quizTitle = document.getElementById("title");
var userScore =0;
var timeLeft = 0;
var timer;
// var state = "start";


function HomeState(){
    homeEl.style.display = "block";
    quizEl.style.display = "none";
    endEl.style.display = "none";
    
}
function questionState(){
   
    homeEl.style.display = "none";
    quizEl.style.display = "block";
    endEl.style.display = "none";
    begin();
    

}
function begin() {
    startTime = 30;
    document.getElementById("secondsLeft").textContent = startTime;
    var timer = setInterval(function() {
        startTime--;
        document.textContent = timeLeft;
        document.getElementById("secondsLeft").textContent = startTime;
        // if (timeLeft <= 0) {
        //     clearInterval(timer);
        //     endGame(); 
        // }
    }, 1000);

    newQuestion();
}


function correct() {
    score += 20;
    newQuestion();
}
    
// function newQuestion(){
//     homeEl.style.display = "none";
//     quizEl.style.display = 'block';
//     endEl.style.display = "none";
// }

// function displayState() {
//     if (state === 'start') {
//       startEl.style.display = 'block';
//       quizEl.style.display = 'none';
//       endEl.style.display = 'none';
//     }
//     if (state === 'quiz') {
//       startEl.style.display = 'none';
//       quizEl.style.display = 'block';
//       endEl.style.display = 'none';
//     }
//     if (state === 'end') {
//       startEl.style.display = 'none';
//       quizEl.style.display = 'none';
//       endEl.style.display = 'block';
//     }
//   }



startBtn.addEventListener("click", function(){
    // newQuestion();
    questionState();
}
//   state = 'quiz';
  
);

// quizTitle.addEventListener("click", function () {
//   state = 'end';
//   displayState();
// });
HomeState();