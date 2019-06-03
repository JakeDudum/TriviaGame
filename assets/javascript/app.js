$(document).ready(function () {

    var questions = [
        question1 = {
            question: "What does JARVIS stand for?",
            option1: "Just Another Really Very Intelligent System",
            option2: "Just Another Rather Very Intelligent System",
            option3: "Just Another Rather Very Intellectual System",
            option4: "Just Another Rather Very Intelligent Subsystem",
            correct: "Just Another Rather Very Intelligent System",
            image: "assets/images/question1.gif"
        },
        question2 = {
            question: "What mission do Black Widow and Hawkeye refer to in the first avenegers film?",
            option1: "Budapest",
            option2: "Buddapest",
            option3: "Bangladesh",
            option4: "Bangalore",
            correct: "Budapest",
            image: "assets/images/question2.gif"
        },
        question3 = {
            question: "Which armor mark first used the iconic red and gold coloring from the comics?",
            option1: "Mark 1",
            option2: "Mark 2",
            option3: "Mark 3",
            option4: "Mark 4",
            correct: "Mark 3",
            image: "assets/images/question3.gif"
        },
        question4 = {
            question: "At the end of The Incredible Hulk, how many days without incident did Bruce Banner achieve?",
            option1: "28",
            option2: "29",
            option3: "30",
            option4: "31",
            correct: "31",
            image: "assets/images/question4.gif"
        },
        question5 = {
            question: "What does SHIELD stands for?",
            option1: "Strategic Hazard Intervention Espionage Logistics Directorate",
            option2: "Strategic Homeland Intervention, Enforcement and Logistics Division",
            option3: "Supreme Headquarters, International Espionage and Law-Enforcement Division",
            option4: "Strategic Homeland Intervention Espionage Logistics Directorate",
            correct: "Strategic Homeland Intervention, Enforcement and Logistics Division",
            image: "assets/images/question5.gif"
        },
        question6 = {
            question: "In which movie did Elon Musk make a guest appearence?",
            option1: "Iron Man 2",
            option2: "Captain America: Winter Soldier",
            option3: "The Incredible Hulk",
            option4: "Avengers",
            correct: "Iron Man 2",
            image: "assets/images/question6.gif"
        },
        question7 = {
            question: "What is Captain America's shield made of?",
            option1: "Titanium",
            option2: "Adamantium",
            option3: "Reverbium",
            option4: "Vibranium",
            correct: "Vibranium",
            image: "assets/images/question7.gif"
        },
        question8 = {
            question: "Thor is the god of what?",
            option1: "Thunder",
            option2: "Hammers",
            option3: "Lightning",
            option4: "Storms",
            correct: "Thunder",
            image: "assets/images/question8.gif"
        },
        question9 = {
            question: "Which of these is worthy of Thor's Hammer?",
            option1: "Elevator",
            option2: "Coat Hanger",
            option3: "Floor",
            option4: "Table",
            correct: "Coat Hanger",
            image: "assets/images/question9.gif"
        },
        question10 = {
            question: "How many futures did Dr. Strange see in Avengers: Infinity War?",
            option1: "14,000,605",
            option2: "1,000,000,000",
            option3: "14,000,604",
            option4: "9000",
            correct: "14,000,605",
            image: "assets/images/question10.gif"
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
        key = this.value;
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
        $("#image").addClass("d-none");

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

        if (key === questions[questionIndex].correct) {
            score++;
            $("#answerResult").text("Correct!");
        }
        else if (key === "NA") {
            unanswered++;
            $("#answerResult").text("Out of Time!");
            $("#correctResult").removeClass("d-none");
            $("#correctResult").text("Correct Answer: " + questions[questionIndex].correct);
        }
        else {
            incorrect++;
            $("#answerResult").text("Incorrect!");
            $("#correctResult").removeClass("d-none");
            $("#correctResult").text("Correct Answer: " + questions[questionIndex].correct);
        }
        $("#image").removeClass("d-none");
        $("#image").attr('src', questions[questionIndex].image);

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
        $("#image").addClass("d-none");

        $("#endgame").removeClass("d-none");
        $("#correct").text("Corect Answers: " + score);
        $("#incorrect").text("Incorect Answers: " + incorrect);
        $("#unanswered").text("Unanswered: " + unanswered);
    }

});