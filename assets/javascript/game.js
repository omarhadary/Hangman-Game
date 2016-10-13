// variables
var correctAnswer = 0;
var guessesLeft = 5;
var hiddenWords = [];
var randomWords;
var rightGuess = [];
var userGuess = [];
var userInput;
// randomly select a word for user to play
wordsToPlay = ["RODEO", "MULHOLLAND", "HOLLYWOOD", "SUNSET", "MELROSE", ];
randomWords = wordsToPlay[Math.floor(Math.random() * wordsToPlay.length)];
hiddenWords = randomWords.split("");
// replace all characters in the array with an "_"
for (var i = 0; i < hiddenWords.length; i++) {
    hiddenWords[i] = "_ ";
}
// display the word on html without commas
document.getElementById("the-word").innerHTML = (hiddenWords.join(""));
// Capture user input 
document.onkeyup = function() {
    userInput = String.fromCharCode(event.keyCode).toUpperCase();
    userGuess.push(userInput);
    // compare user input against the word solution, if correct then reveal the letter if incorrect then reduce guesses left by 1
    for (var j = 0; j < randomWords.length; j++) {
        if (randomWords.charAt(j) === userInput) {
            rightGuess.push(userInput);
            hiddenWords.splice(j, 1, userInput);
        } else if (randomWords.charAt(j) !== userInput) {
            guessesLeft--;
        }
    }
    document.getElementById("already-guessed").innerHTML = userGuess;
    document.getElementById("the-word").innerHTML = (hiddenWords.join(""));
    document.getElementById("guesses-remaining").innerHTML = guessesLeft;
    // if user wins then add 1 to wins
    if (hiddenWords.join("").toString() === randomWords) {
        correctAnswer++;
        nextTurn();
    }
    document.getElementById("user-wins").innerHTML = correctAnswer;
    // new game
    // if user wins or losses then choose another word automatically to play
    function nextTurn() {
            guessesLeft = 5;
            userGuess = [];
            randomWords = wordsToPlay[Math.floor(Math.random() *
                wordsToPlay.length)];
            hiddenWords = randomWords.split("");
            for (var i = 0; i < hiddenWords.length; i++) {
                hiddenWords[i] = "_ ";
            }
            document.getElementById("the-word").innerHTML = (hiddenWords.join(
                ""));
        }
        // replace image to correspond with word

    function changeImage() {
        document.getElementByClassName("img-responsive").src =
            "../images/Rodeo.jpg";
    }
    if (hiddenWords.join("") === "RODEO") {
        changeImage();
    }
};