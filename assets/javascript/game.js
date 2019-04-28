//array of letters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//tracking for wins, losses, guess left, guess so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

var userGuess = document.onkeyup;
var compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

document.onkeyup = function(event){
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
  if(guessesSoFar.indexOf(userGuess) < 0 && alphabet.indexOf(userGuess) >= 0) {
    guessesSoFar[guessesSoFar.length]=userGuess;
    guessesLeft--;
  }
  if(compChoice == userGuess){
    wins++;
    guessesLeft = 9;
    guessesSoFar = [];
    compChoice = alphabet[Math.floor(Math.random() *alphabet.length)];
  }
  if (guessesLeft == 0) {
  losses++;
  guessesLeft = 9;
  guessesSoFar = [];
  compChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
  }

$("#wins").html(wins);
$("#losses").html(losses);
$("#guessesLeft").html(guessesLeft);
$("#guessesSoFar").html(guessesSoFar);
}


