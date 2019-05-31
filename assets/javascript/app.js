$(document).ready(function () {

    var questions = {
        question1: {
            question: "pick red",
            correct: "red",
            wrong: "blue",
            wrong1: "green",
            wrong2: "white"
        },
        question2: {
            question: "pick blue",
            correct: "blue",
            wrong: "red",
            wrong1: "green",
            wrong2: "white"
        },
        question3: {
            question: "pick white",
            correct: "white",
            wrong: "blue",
            wrong1: "green",
            wrong2: "red"
        },
    }

    var timerID;
    var number = 10;


    $(".start").on('click', function () {
        $("#startPage").addClass("d-none");
        $("#questionPage").removeClass("d-none");
        timerID = setInterval(countdown, 1000);
    });

    function countdown() {

        number--;
  
        $("#countdown").text(number);
  
        if (number === 0) {
          stopTrivia();
          setTimeout(showAnswer, 1000);
        }
      }



    function startTrivia() {
        timerID = setInterval(askQuestion, 3000);
    }

    function stopTrivia() {
        clearInterval(timerID);
    }
    
});