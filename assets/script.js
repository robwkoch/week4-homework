var quizBox = document.getElementById("quiz");
var start = document.getElementById("start");
var question = document.getElementById("question");
var choiceA = document.getElementById("optionA");
var choiceB = document.getElementById("optionB");
var choiceC = document.getElementById("optionC");
var choiceD = document.getElementById("optionD");


var questionList = [
    {
        questions: "Inside which HTML element do we put the JavaScript?",
        choices: {
            a: "<head>",
            b: "<meta>",
            c: "<script>",
            d: "<style>",
        },
        correct: "c"

    },
    {
        questions: "Which of the following is not JavaScript Data Types?",
        choices: {
            a: "Boolean",
            b: "Undefined",
            c: "Number",
            d: "Float",
        },
        correct: "d"

    },
    {
        questions: "What is the original name of JavaScript?",
        choices: {
            a: "LiveScript",
            b: "Mocha",
            c: "JavaScript",
            d: "EScript",
        },
        correct: "b"

    }];
    console.log(questionList)

    function askQuestion(){

        let q = questions;
    
       
    
        question.innerHTML = "<p>"+ q.questions +"</p>";
    
        choiceA.innerHTML = q.choiceA;
        choiceB.innerHTML = q.choiceB;
        choiceC.innerHTML = q.choiceC;
        choiceD.innerHTML = q.choiceD;
    
    }

   




    
    var time = document.getElementById("timer");
var countdown = setInterval(function() {
    time--;
    document.getElementById("timer").textContent = "Time: " + time;
    if (time <= 0) clearInterval(countdown);
}, 1000);