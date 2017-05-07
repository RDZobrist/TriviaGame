// Global variables \\
var currentQuestionChoices;
var currentQuestion;
var currentAnswer;
var questionsLeft = 11;
var currentQuestionNumber = [Math.floor(Math.random() * questionsLeft) + 1]
var correctGuesses = 0;
var wrongGuesses = 0;
var unanswered = 0;
var gameOver = false;
var qWrong = new Audio("assets/questionWrong.mp3");
var qRight = new Audio("assets/questionRight.mp3");
var noMoreTime = new Audio("assets/timesUP.mp3");
var bigBen = 30;
var intervalId;

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
        imagePath:  'assets/images/DbacksCelebration.jpg'
    },

    'four': {
        question: "Which pitcher won game 7 of the 2001 World Series?",
        choices: ["Randy Johnson", "Curt Schilling", "Brian Anderson", "Cy Young"],
        answer: 0,
        imagePath: 'assets/images/DbacksCelebration.jpg'
    },

    'five': {
        question: "How many home runs did Luis Gonzalez hit in the 2001 season?",
        choices: ["57", "44", "57", "48"],
        answer: 2,
        imagePath:  'assets/images/DbacksCelebration.jpg'

    },

    'six': {
        question: "Which D-Back relief pitcher gave up three homeruns during the World Series?",
        choices: ["Byung-Hyun Kim", "Mariano Rivera", "Curt Schilling", "Mike Fetters"],
        answer: 0,
        imagePath:  'assets/images/DbacksCelebration.jpg'
    },

    'seven': {
        question: "Who hit the only home run in Game 7 of the 2001 World Series?",
        choices: ["Alfonso Soriano", "Matt Williams", "Mark Grace", "Luis Gonzales"],
        answer: 0,
        imagePath:  'assets/images/DbacksCelebration.jpg'
    },

    'eight': {
        question: " In the expansion draft of 1997, who was the first player that the Diamondbacks selected?",
        choices: ["Brian Anderson", "Randy Johnson", "Ty Cobb", "Alex Rodriguez"],
        answer: 0,
        imagePath:  'assets/images/DbacksCelebration.jpg'


    },
    'nine': {
        question: "Who has won the Cy Young Award in the National League for the Diamondbacks, for four consecutive years from 1999 through 2002?",
        choices: ["Ozzie Smith", "Curt Schilling", "Brian Anderson", "Randy Johnson"],
        answer: 3,
        imagePath:  'assets/images/DbacksCelebration.jpg'

    },
    'ten': {
        question: "What player did the Diamondbacks trade in order to get Luis Gonzalez after the 1998 season?",
        choices: ["Craig Counsel", "Karim Garcia", "Jay Bell", "Matt Williams"],
        answer: 1,
        imagePath:  'assets/images/DbacksCelebration.jpg'
    },

    'eleven': {
        question: "How old was Mike Morgan when the D-Backs won the World Series?",
        choices: ["41", "37", "25", "42"],
        answer: 3,
        imagePath:  'assets/images/DbacksCelebration.jpg'
    },

};

// displays current question, current choices, and references current answer
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
    // displays current question \\
    $("#stageQandI").text(currentQuestion);

}
currentGameState(currentQuestionNumber);




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
letsGo();

function timesUp() {
    $("#choicesZero, #choicesOne, #choicesTwo, #choicesThree, #gameClock, #stageQandI").hide();
    $("#message").text("Whoops, you took a little too long - time's up! Baseball's already way too long a game, hurry up next time!");
    noMoreTime.play();
    $("#imgSpot").append("<img src=" + currentImage + "'")
}

$("#choicesZero").on("click", function(){
    if(currentAnswer === 0){
        correctGuesses++;
        stop();
        // rightAnswer();
    }
        if(currentAnswer !== 0){
            wrongGuesses++;
            stop();
            // wrongAnswer();

        }
   
    
})
$("#choicesOne").on("click", function(){
    if(currentAnswer === 1){
        correctGuesses++;
        stop();
        // rightAnswer();
    }
         if(currentAnswer !== 1){
            wrongGuesses++;
            stop();
            // wrongAnswer();
        }
    
})
$("#choicesTwo").on("click", function(){
    if(currentAnswer === 2){
        correctGuesses++;
        stop();
        // rightAnswer();
    }
         if(currentAnswer !== 2){
            wrongGuesses++;
            stop();
            // wrongAnswer();
        }
    
})
$("#choicesThree").on("click", function(){
    if(currentAnswer === 3){
        correctGuesses++;
        stop();
        // rightAnswer();
    }
         if(currentAnswer !== 3){
            wrongGuesses++;
            stop();
            // wrongAnswer();
        
    }
})

