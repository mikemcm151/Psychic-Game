//Alphabet
var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//Set variables to zero
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessesSoFar = [];
var letterToGuess = null;


var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
  document.querySelector('#guessLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
  document.querySelector('#let').innerHTML = "Your Guesses so far: " + guessesSoFar.join(', ');
};

var reset = function() {
  totalGuesses = 9;
  guessesLeft = 9;
  guessesSoFar = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessesSoFar.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                reset();
            }
        }else if(guessesLeft == 0){

            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            reset();

        }
};