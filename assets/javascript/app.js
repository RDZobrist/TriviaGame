// Global variables \\
var currentQuestionChoices;
var currentQuestion;
var currentAnswer;
var questionsLeft = 12;
var currentQuestionNumber = questionsLeft;
var correctGuesses = 0;
var wrongGuesses = 0;
var unanswered = 0;
var battingAverage = correctGuesses / 12;
var gameOver;
var startOver;
var correctMessages = ["Brilliant! Keep it up!", "Wow, you're Hall-of-Fame bound!", "Homerun!!!", "And the crowd goes nuts!"];

var qWrong = new Audio("assets/questionWrong.mp3");
var qRight = new Audio("assets/questionRight.mp3");
var noMoreTime = new Audio("assets/timesUP.mp3");
var bigBen = 30;
var intervalId;
var userGuessed;

// setTimeout(gameTimer, 1000 * 30);
// setTimeout(shortTimer, 1000 * 5);




// create object of all questions to be guessed \\

var master = {

    'one': {
        question: "What year did the Diamondbacks win the World Series?",
        choices: ["1999", "2001", "2002", "I don't know"],
        answer: 1,
        imagePath: 'assets/images/DbacksCelebration.jpg'

    },

    'two': {
        question: "How old was Randy Johnson when he won his first Cy Young award as a Diamondback?",
        choices: ["36", "37", "32", "39"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'


    },

    'three': {
        question: " One of the players on the Diamondbacks' opening day roster, led all of the major league players in the decade of the 1990s, with most hits and most doubles - Who was that player?",
        choices: ["David Dellucci", "Jay Bell", "Matt Williams", "Mark Grace"],
        answer: 3,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'four': {
        question: "Which pitcher won game 7 of the 2001 World Series?",
        choices: ["Randy Johnson", "Curt Schilling", "Brian Anderson", "Cy Young"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'five': {
        question: "How many home runs did Luis Gonzalez hit in the 2001 season?",
        choices: ["-1", "44", "57", "48"],
        answer: 2,
        imagePath: 'assets/images/DbacksCelebration.jpg'

    },

    'six': {
        question: "Which D-Back relief pitcher gave up three homeruns during the World Series?",
        choices: ["Byung-Hyun Kim", "Mariano Rivera", "Curt Schilling", "Mike Fetters"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'seven': {
        question: "Who hit the only home run in Game 7 of the 2001 World Series?",
        choices: ["Alfonso Soriano", "Matt Williams", "Mark Grace", "Luis Gonzales"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'eight': {
        question: " In the expansion draft of 1997, who was the first player that the Diamondbacks selected?",
        choices: ["Brian Anderson", "Randy Johnson", "Ty Cobb", "Alex Rodriguez"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'


    },
    'nine': {
        question: "Who won the Cy Young Award in the National League for the Diamondbacks, for four consecutive years from 1999 through 2002?",
        choices: ["Ozzie Smith", "Curt Schilling", "Brian Anderson", "Randy Johnson"],
        answer: 3,
        imagePath: 'assets/images/DbacksCelebration.jpg'

    },
    'ten': {
        question: "What player did the Diamondbacks trade in order to get Luis Gonzalez after the 1998 season?",
        choices: ["Craig Counsel", "Karim Garcia", "Jay Bell", "Matt Williams"],
        answer: 1,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'eleven': {
        question: "How old was Mike Morgan when the D-Backs won the World Series?",
        choices: ["41", "37", "25", "42"],
        answer: 3,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'twelve': {
        question: "Who was the first player to ever get a hit as a Diamondback?",
        choices: ["Jay Bell", "Shaquile O'Neil", "Travis Lee", "Matt Williams"],
        answer: 2,
        imagePath: 'assets/images/DbacksCelebration.jpg',
        a: ""
    },



};


//// Functions \\\\

// displays current question, current choices, and references current answer
function cleanSlate() {
    var correctGuesses = 0;
    var wrongGuesses = 0;
    var unanswered = 0;
    var questionsLeft = 12;
    var gameOver = false;
    var startOver = false;
    var currentQuestionNumber = questionsLeft;
    var bigBen = 30;
    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI, #imgSpot, #message").empty().show();
    stop();
    letsGo();
    currentGameState(currentQuestionNumber);





}

function megatron() {
    $("#imgSpot").html("<img src=" + currentImage + " width= '300px'" + "id='imageGallery' / >");
}

// setting up all information for logic and comparing during gameplay \\
function currentGameState(currentQuestionNumber) {


    if (currentQuestionNumber == 1) {
        currentAnswer = master.one.answer;
        currentQuestionChoices = master.one.choices;
        currentQuestion = master.one.question;
        currentImage = master.one.imagePath;
        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 2) {
        currentAnswer = master.two.answer;
        currentQuestionChoices = master.two.choices;
        currentQuestion = master.two.question;
        currentImage = master.two.imagePath;
        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 3) {
        currentAnswer = master.three.answer;
        currentQuestionChoices = master.three.choices;
        currentQuestion = master.three.question;
        currentImage = master.three.imagePath;
        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 4) {
        currentQuestionChoices = master.four.choices;
        currentAnswer = master.four.answer;
        currentQuestion = master.four.question;
        currentImage = master.four.imagePath;


        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 5) {
        currentQuestionChoices = master.five.choices;
        currentAnswer = master.five.answer;
        currentQuestion = master.five.question;
        currentImage = master.five.imagePath;

        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 6) {
        currentQuestionChoices = master.six.choices;
        currentAnswer = master.six.answer;
        currentQuestion = master.six.question;
        currentImage = master.six.imagePath;


        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 7) {
        currentQuestionChoices = master.seven.choices;
        currentAnswer = master.seven.answer;
        currentQuestion = master.seven.question;
        currentImage = master.seven.imagePath;

        //current choices displayed on butons \\

        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 8) {
        currentQuestionChoices = master.eight.choices;
        currentAnswer = master.eight.answer;
        currentQuestion = master.eight.question;
        currentImage = master.eight.imagePath;

        //current choices displayed on butons \\
        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 9) {
        currentQuestionChoices = master.nine.choices;
        currentAnswer = master.nine.answer;
        currentQuestion = master.nine.question;
        currentImage = master.nine.imagePath;

        //current choices displayed on butons \\
        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 10) {
        currentQuestionChoices = master.ten.choices;
        currentAnswer = master.ten.answer;
        currentQuestion = master.ten.question;
        currentImage = master.ten.imagePath;

        //current choices displayed on butons \\
        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 11) {
        currentQuestionChoices = master.eleven.choices;
        currentAnswer = master.eleven.answer;
        currentQuestion = master.eleven.question;
        currentImage = master.eleven.imagePath;

        //current choices displayed on butons \\
        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    if (currentQuestionNumber == 12) {
        currentQuestionChoices = master.twelve.choices;
        currentAnswer = master.twelve.answer;
        currentQuestion = master.twelve.question;
        currentImage = master.twelve.imagePath;

        //current choices displayed on butons \\
        $("#choicesZero").text(currentQuestionChoices[0]);
        $("#choicesOne").text(currentQuestionChoices[1]);
        $("#choicesTwo").text(currentQuestionChoices[2]);
        $("#choicesThree").text(currentQuestionChoices[3]);
    }
    // displays current question \\
    $("#stageQandI").empty();
    $("#stageQandI").text(currentQuestion);
    // resetting the game gameClock\\
    // calling the game clock function \\
    bigBen = 30;
    



}


// holds place so number can be decremented \\

function letsGo() {
    intervalId = setInterval(minusTime, 1000);
}
//  The function that reduces number displayed on screen for question timer.
function minusTime() {
    bigBen--;
    //  display the time left \\.
    $("#gameClock").html("<h3>Time Left: " + bigBen + "</h3>");
    // when timer runs out \\
    if (bigBen === 0) {
        // stop the timer \\
        stop();
        timesUp();

    }
}
//  The stop function
function stop() {
    clearInterval(intervalId);
}


// clears screen, displays the time's up screen \\

function timesUp() {
    questionsLeft--;
    wrongGuesses++;
    unanswered++;
    if (questionsLeft === 0) {
        gameOver = true;
         noMore();
    }

    currentQuestionNumber = questionsLeft;
    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock").hide();
    $("#message").text("Whoops, you took a little too long - time's up! Baseball's already way too long a game. Hurry up next time!" + "br" + "The correct answer is: " + currentQuestionChoices[currentAnswer]);
    noMoreTime.play();
    megatron(currentImage);
    timesUp_clock();

}
// seven-second timer used to reload page after user let gameClock expire \\
function timesUp_clock() {
    setTimeout(function() { nextQuestion(); }, 5000);
}

// Each button represents a choice, comparing index spot of correct answer to user guess \\
// button zero - [0] \\
$("#choicesZero").on("click", function() {
    if (currentAnswer === 0) {
        userGuessed = true;
        stop();
        qRight.play();
        rightAnswer();

        // rightAnswer();
    }
    if (currentAnswer !== 0) {

        stop();
        qWrong.play();

        wrongAnswer();

    }
    // button one - [1] \\

});
$("#choicesOne").on("click", function() {
    if (currentAnswer === 1) {

        stop();
        qRight.play();
        rightAnswer();



    }
    if (currentAnswer !== 1) {

        stop();
        qWrong.play();
        wrongAnswer();
    }
    userGuessed = true;

    // button two - [2] \\

});
$("#choicesTwo").on("click", function() {
    if (currentAnswer === 2) {


        stop();
        qRight.play();
        rightAnswer();


    }
    userGuessed = true;
    if (currentAnswer !== 2) {
        userGuessed = true;

        stop();
        qWrong.play();
        wrongAnswer();
    }
    userGuessed = true;

    // button three - [3] \\

});
$("#choicesThree").on("click", function() {
    if (currentAnswer === 3) {

        stop();
        qRight.play();
        rightAnswer();



    }
    userGuessed = true;
    if (currentAnswer !== 3) {

        stop();
        qWrong.play();
        wrongAnswer();



    }
});

function rightAnswer() {
    correctGuesses++;
    questionsLeft--;
    if (questionsLeft === 0) {
        gameOver = true;
         noMore();
        
    }
    currentQuestionNumber = questionsLeft;
    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI").hide();
    var rndmMsgNumbr = [Math.floor(Math.random() * 4) + 1];
    $("#message").text(correctMessages[rndmMsgNumbr]);
    megatron(currentImage);
    currentGameState();



}

function wrongAnswer() {
    wrongGuesses++;
    questionsLeft--;
    if (questionsLeft <1) {
        gameOver = true;
        noMore();
      
    }
    currentQuestionNumber = questionsLeft;

    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI").hide();
    $("#message").text("Ohhhh, nice try.  The correct answer is " + currentQuestionChoices[currentAnswer] + ".");
    megatron(currentImage);
    currentGameState();


}

function nextQuestion() {
if(!questionsLeft < 1) {
    $("#stageQandI").empty();
    $("#imgSpot").empty();
    $("#message").empty();
    startOver = false;
    currentQuestionNumber = questionsLeft;
    currentGameState(currentQuestionNumber);
    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI").show();

}
    // $("#stageQandI").text(currentQuestion);
}




$("#startitup").on("click", function(){
    if (startOver === false){
       
    currentGameState(currentQuestionNumber);
} $("#startitup").addClass("biPolar").empty("biPolar").hide();
})
function noMore(){

if (gameOver === true && startOver === false){

   $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI, #message, #imgSpot").empty().hide();
    $(".biPolar").show().text(" Start Over ");
    $("#results").show().html("Correct Guesses: " + correctGuesses);
       $("#results2").show().html("Incorrect Guesses: " + wrongGuesses);
        $("#results3").show().html("Unanswered Guesses: " + unanswered);
        
}
}
$("#startitup").on("click", function(){
  
    $("#results, #results2, #results3").hide();
    startOver = true;
   $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI").show();
   bigBen = 30;
   stop();
     cleanSlate();
})
