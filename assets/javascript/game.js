var wins = 0;
var losses = 0;
var guesses = 10;
var 

// List of space words
    var spaceWords = ["space", "comet", "stars", "asteroid", "mars", "jupiter", "earth", "neptune", "mercury", "moon", "uranus", "eclipse", "universe", "rocket", "dust"];
    console.log(spaceWords)

    var word = spaceWords[Math.floor((Math.random() * spaceWords.length))];
    var answerArray = [];
    for (var i = 0; i < spaceWords.length; i++){
        answerArray[i] = "_";
    }
    var remainingLetters = spaceWords.length;




// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     answerArray[i] = "_";
// }

// var remainingLetters = word.length;



// Word Guess
// var wrongGuesses = 0;
// $("button").on("click", function(){
//     $(this).addClass("used");
//     $(this).prop("disabled", "true");
//     var matchFound = false;
// }) 

//