$(document).ready(function () {

    var questions = [
        question1 = {
            question: "pick red",
            option1: "red",
            option2: "blue",
            option3: "green",
            option4: "white",
            correct: "red",
        },
        question2 = {
            question: "pick blue",
            option1: "white",
            option2: "red",
            option3: "green",
            option4: "blue",
            correct: "blue",
        },
        question3 = {
            question: "pick white",
            option1: "green",
            option2: "blue",
            option3: "white",
            option4: "red",
            correct: "white",
        },
    ]

    var timerID;
    var timer = 5;
    var questionIndex = 0;
    var score = 0;
    var incorrect = 0;
    var unanswered = 0;


    $(".start").on('click', function () {
        $("#startPage").addClass("d-none");
        $("#questionPage").removeClass("d-none");
        startTrivia();
    });

    function countdown() {

        timer--;
  
        $("#countdown").text(timer);
  
        if (timer === 0) {
        }
    }

    function showAnswer() {

    }

    function askQuestion() {

        timer = 5;
        timerID = setInterval(countdown, 1000);
        var key = "NA";
        var timeoutID = setTimeout(checkAnswer, 5000);

        $("#question").text(questions[questionIndex].question);
        $("#choice1").text(questions[questionIndex].option1);
        $("#choice1").val(questions[questionIndex].option1);
        $("#choice2").text(questions[questionIndex].option2);
        $("#choice2").val(questions[questionIndex].option2);
        $("#choice3").text(questions[questionIndex].option3);
        $("#choice3").val(questions[questionIndex].option3);
        $("#choice4").text(questions[questionIndex].option4);
        $("#choice4").val(questions[questionIndex].option4);


        $(".btn").on('click', function() {
            key = this.value;
            clearTimeout(timeoutID);
            checkAnswer();
        });

        function checkAnswer() {
            if (key === questions[questionIndex].correct) {
                score++;
                console.log("you got " + score);
            } else if (key === "NA") {
                unanswered++;
                console.log("unanswered " + unanswered);
            }
            else {
                incorrect++;
                console.log("incorrect " + incorrect);
            }
        }
    }

    function startTrivia() {
        askQuestion();
    }

    function stopTrivia() {
        clearInterval(timerID);
    }
    
});