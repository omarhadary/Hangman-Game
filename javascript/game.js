	 // variables
	 // randomly select a word for user to play
	var wordsToPlay = [
	    ["S"],
	    ["R", "O", "D", "E", "O"],
	    ["M", "U", "L", "H", "O", "L", "L", "A", "N", "D"],
	    ["H", "O", "L", "L", "Y", "W", "O", "O", "D"],
	    ["S", "U", "N", "S", "E", "T"],
	    ["M", "E", "L", "R", "O", "S", "E"]
	]
	var rand = wordsToPlay[Math.floor(Math.random() * wordsToPlay.length)];
	 // replace all characters in the array with an "_"
	for (var i = 0; i < rand.length; i++) {
	    rand[i] = "_ ";
	}
	 // display the word on html
	document.getElementById("the-word").innerHTML = (rand.join(""))
	    // Capture user input of letters
	 document.onkeyup = function(event) {
	        var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
	        var guessesLeft = 10;
	        // display user input on html
	        document.getElementById("already-guessed").innerHTML = userGuess.value
	            // function myFunction() {
	            //    var x = document.getElementById(userGuess).value;
	            //    document.getElementById("user-guess").innerHTML = x;
	            // }
	            // compare user input against letters in the word in play	
	        if ((userGuess == "S") && (rand[0] == "S")) {
	            rand, replace("_ ", "S");
	        }
	        // for (var i = 0; i < rand.length; i++){
	        // 	if(rand[i] === userGuess){
	        // 		alert("yaay");
	        // rand[i] = userGuess + " ";
	        // var correctAnswer = true;
	        // }
	        // }
	        // if correct letter is chosen then reveal it
	        // if incorrect letter is chosen then display it in letter already guessed and reduce the number of guesses remaining
	        else if ((userGuess == "S") && (rand !== 'S')) {
	            this.guessesLeft++;
	        } else if ((userGuess == "P") && (rand !== 'P')) {
	            this.guessesLeft--;
	        } else if ((userGuess == "Q") && (rand !== 'Q')) {
	            guessesLeft--;
	        } else if ((userGuess == "T") && (rand !== 'T')) {
	            guessesLeft--;
	        }
	        document.getElementById("guesses-remaining").innerHTML = guessesLeft
	    }
	    // 	if user wins then add 1 to wins
	    // if user wins then replace image
	document.getElementById('img-responsive').src = "../images/Sunset.jpg";
	 // 		if user wins or losses then choose another word automatically to play