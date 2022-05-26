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
    thequestion:"In baseball, how many strikes are in an out?",
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
var multipleChoice = document.querySelectorAll("button.multipleChoice")
var quizQuestion = document.getElementById("theQuestion");
var btnA = document.getElementById("btnA");
var btnB = document.getElementById("btnB");
var btnC = document.getElementById("btnC");
var questionPosition = 0;
var userScore =0;
// var timeLeft = 0;
var timer;
// var state = "start";


HomeState();

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
        
        document.getElementById("secondsLeft").textContent = startTime;
        if (startTime <= 0) {
            clearInterval(timer);
            endGame(); 
        }
    }, 1000);

    newQuestion();
}

function endGame(){
    homeEl.style.display = "none";
    quizEl.style.display = "none";
    endEl.style.display = "block";
}
// function correct() {
//     score += 20;
//     newQuestion();
// }
function lastQuestion(){
    homeEl.style.display = "none";
    quizEl.style.display = 'block';
    endEl.style.display = "none";


    quizQuestion.textContent = questions[4].thequestion;
    btnA.textContent = questions[4].options[0];
    btnB.textContent = questions[4].options[1];
    btnC.textContent = questions[4].options[2];
   }


function newQuestion(){
    homeEl.style.display = "none";
    quizEl.style.display = 'block';
    endEl.style.display = "none";

    
    quizQuestion.textContent = questions[questionPosition].thequestion;
    btnA.textContent = questions[questionPosition].options[0];
    btnB.textContent = questions[questionPosition].options[1];
    btnC.textContent = questions[questionPosition].options[2];
    questionPosition++;
        if(questionPosition === questions.length){
            lastQuestion();
        }
    };
    


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
})    

function clickA(){

}
function clickB(){
    
}
function clickC(){
    
}


btnA.addEventListener("click", function(){
    if(quizQuestion.textContent == questions[4].thequestion){
         endGame();
        } else {
            newQuestion();}
   
});

    
btnB.addEventListener("click", function(){
    if(quizQuestion.textContent == questions[4].thequestion){
        alert("try again");
    } else{
    newQuestion();}
});

    
btnC.addEventListener("click", function(){
    if(quizQuestion.textContent == questions[4].thequestion){
        alert("try again");
    } else{
    newQuestion();}
});

// multipleChoice.addEventListener("click", function(){
//     newQuestion();
// })

//   state = 'quiz';
  


// quizTitle.addEventListener("click", function () {
//   state = 'end';
//   displayState();
// });
