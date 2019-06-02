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
    var timeoutID;
    var timer = 5;
    var questionIndex = 0;
    var score = 0;
    var incorrect = 0;
    var unanswered = 0;
    var key;


    $("#start").on('click', function () {
        startTrivia();
    });

    $("#restart").on('click', function () {
        timer = 5;
        questionIndex = 0;
        score = 0;
        incorrect = 0;
        unanswered = 0;

        $("#endgame").addClass("d-none");

        startTrivia();
    });

    function countdown() {

        timer--;

        $("#countdown").text(timer);

        if (timer === 0) {
            clearInterval(timerID);
        }
    }

    $(".option").on('click', function () {
        console.log("i clicked");
        key = this.value;
        console.log(key);
        clearTimeout(timeoutID);
        clearInterval(timerID);
        checkAnswer();
    });

    function askQuestions() {

        timer = 5;
        $("#countdown").text(timer);
        timerID = setInterval(countdown, 1000);
        key = "NA";
        timeoutID = setTimeout(checkAnswer, 5000);

        $("#buttons").removeClass("d-none");
        $("#answerResult").addClass("d-none");
        $("#correctResult").addClass("d-none");

        $("#question").text(questions[questionIndex].question);
        $("#choice1").text(questions[questionIndex].option1);
        $("#choice1").val(questions[questionIndex].option1);
        $("#choice2").text(questions[questionIndex].option2);
        $("#choice2").val(questions[questionIndex].option2);
        $("#choice3").text(questions[questionIndex].option3);
        $("#choice3").val(questions[questionIndex].option3);
        $("#choice4").text(questions[questionIndex].option4);
        $("#choice4").val(questions[questionIndex].option4);
    }

    function checkAnswer() {
        clearTimeout(timeoutID);
        clearInterval(timerID);

        $("#buttons").addClass("d-none");
        $("#answerResult").removeClass("d-none");
        console.log(questionIndex);

        if (key === questions[questionIndex].correct) {
            score++;
            $("#answerResult").text("Correct!");
            console.log("correct " + score);
        }
        else if (key === "NA") {
            unanswered++;
            $("#answerResult").text("Out of Time!");
            $("#correctResult").removeClass("d-none");
            $("#correctResult").text("Correct Answer: " + questions[questionIndex].correct);
            console.log("unanswered " + unanswered);
        }
        else {
            incorrect++;
            $("#answerResult").text("Incorrect!");
            $("#correctResult").removeClass("d-none");
            $("#correctResult").text("Correct Answer: " + questions[questionIndex].correct);
            console.log("incorrect " + incorrect);
        }
        questionIndex++;
        if (questionIndex === questions.length) {
            setTimeout(endTrivia, 3000);
        }
        else {
            setTimeout(askQuestions, 3000);
        }
    }

    function startTrivia() {
        $("#buttons").removeClass('d-none');
        $("#question").removeClass('d-none');
        $("#countdown").removeClass('d-none');
        $("#description").addClass("d-none");
        $("#start").addClass("d-none");
        askQuestions();
    }

    function endTrivia() {
        $("#buttons").addClass("d-none");
        $("#answerResult").addClass("d-none");
        $("#correctResult").addClass("d-none");

        $("#endgame").removeClass("d-none");
        $("#correct").text("Corect Answers: " + score);
        $("#incorrect").text("Incorect Answers: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
    }

});