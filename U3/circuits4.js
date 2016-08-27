// var computerChoice;
// var winner;
// var playerRunningTotal;
// var computerRunningTotal;
//
// function getPlayerMove(){
//   var userChoice=prompt("Please choose rock, paper, or scissors.");
//   console.log("Player chose " + userChoice);
// };
//
// getPlayerMove();

//NOTE: So on step two of this I felt like I could do this a different way but kept getting
//errors. Not sure if they were legit or if the js console just was seeing things slightly
//different than the expected input.

//Again, I have to say that I think I'm getting the right functionality here but maybe am doing
//it in a different way than the cpu expects, because while in repl.it I am getting the right
//functionality the console in circuits keeps throwing errors

//var userChoice;
// var computerChoice;
// var winner;
// var playerRunningTotal;
// var computerRunningTotal;
//
// function getPlayerMove() {
//   userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
//   return userChoice;
// }
//
// function getComputerMove() {
//   var randomNumber = Math.random;
//   console.log(randomNumber);
//
//   if (randomNumber < .33) {
//     computerChoice="rock";
//   } else if (randomNumber < .66) {
//     computerChoice="paper";
//   } else {
//     computerChoice="scissors";
//   }
//   return "The computer chose " + computerChoice;
// };
//
// // Call the functions to test:
// console.log("Player chose " + getPlayerMove());
// getComputerMove();

//This is my final code, it works but kept throwing errors in the js console in circuits.

//Let's Play Rock, Paper, Scissors!
//Global Variables
var userChoice;
var computerChoice;
var winner;
var playerRunningTotal;
var computerRunningTotal;

function getPlayerMove() {
  userChoice = prompt("Please choose either 'rock', 'paper', or 'scissors'.");
  return userChoice;
}

function getComputerMove() {
  var randomNumber = Math.random();
  if (randomNumber < 0.33) {
    computerChoice = "rock";
  } else if (randomNumber < 0.66) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

function getWinner(playerMove,computerMove){
  if (playerMove == computerMove) {
    console.log("The result is a tie!");
  } else if (playerMove == "scissors") {
    if (computerMove == "rock") {
      console.log("The winner is computer!");
    } else {
      console.log("The winner is player!");
    }
  } else if (playerMove == "paper") {
    if (computerMove == "rock") {
		console.log("The winner is player!");
    } else {
        console.log("The winner is computer!");
    }
  } else if (playerMove == "rock") {
    if (computerMove="paper") {
        console.log("The winner is computer!");
    } else {
        console.log("The winner is player!");
    }
  };

}

// Call the functions to test:
console.log("Player chose " + getPlayerMove());
console.log("The computer chose " + getComputerMove());
getWinner(userChoice,computerChoice);
