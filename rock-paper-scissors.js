<<<<<<< HEAD
// Store the results in a counter for player and a counter for the computer
var playerCount = 0;
var computerCount = 0;

// This function compares player input vs computer input
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tied!"
  }
  if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
    playerCount++;
    

    var playerScore = document.getElementById("playerCount");
    playerScore.textContent = `Player Score: ${playerCount}`;

    return "Player wins";
  }
  
  if (
    (computerSelection === "rock" && playerSelection === "scissors") ||
    (computerSelection === "paper" && playerSelection === "rock") ||
    (computerSelection === "scissors" && playerSelection === "paper")
  ) {
    computerCount++;

    var computerScore = document.getElementById("computerCount");
    computerScore.textContent = `Computer Score: ${computerCount}`;

    return "Computer wins";
  }
} 

// This function generates a random Computer selection
function computerPlay() {
  var shapes = ["rock", "paper", "scissors"];
  var word = shapes[Math.floor(Math.random() *  3)];
  console.log("Computer plays", word);

  // DOM: grab the div with id = "computer" and change the h2 text to computer play
  var computerPlay = document.getElementById('computerPlay');
  computerPlay.textContent = `Computer plays: ${word}`;

  return word;

}


// This function collects player input and runs one round
function game() {
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
  button.addEventListener('click', () => {
    var playerSelection = button.id;
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log(playerCount);
    console.log(computerCount);
    
    if (playerCount === 5 || computerCount === 5) {
      console.log("Game Over!");
      winner();
    }
  })
  })
=======
// Create a function that randomly returns 'Rock', 'Paper' or 'Scissors'

// Create an array with three words
// Randomly generate a number between 0 to 2 
// Get word at random array number
// Print the word at that array location



function computerPlay() {
  var shapes = ["Rock", "Paper", "Scissors"];
  var word = shapes[Math.floor(Math.random() *  3)];
  console.log(word);
  return word;
}


// Call the function
//computerPlay();

// Write a function that plays one round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();

  if (player === computer) {
    return "Tied!"
  }
  else if (player === "rock" && computer == "scissors") {
    playerCount++;
    return "You Win! Rock beats Scissors"
  }
  else if (player === "paper" && computer == "rock") {
    playerCount++;
    return "You Win! Paper beats Rock"
  }
  else if (player === "scissors" && computer == "paper") {
    playerCount++;
    return "You Win! Scissors beats Paper"
  }
  else if (player === "scissors" && computer == "rock") {
    computerCount++;
    return "You Lose! Rock beats Scissors"
  }
  else if (player === "rock" && computer == "paper") {
    computerCount++;
    return "You Lose! Paper beats Rock"
  }
  else if (player === "paper" && computer == "scissors") {
    computerCount++;
    return "You Lose! Scissors beats Paper"
  }


  // Rock > Scissors
  // Paper > Rock
  // Scissors > Paper

}

// Loop over the function playRound 5 times
// For each round use console.log() to display the results


// Store the results in a counter for player and a counter for the computer
var playerCount = 0;
var computerCount = 0;

function game() {

  for (var i = 0; i < 5; i++) {
    var playerSelection = prompt("Rock, Paper or Scissors? ");
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }
>>>>>>> 67986955280900ddd074a8a052638d3b4aa58174
  
  console.log("Player score: ", playerCount);
  console.log("Computer score: ",computerCount);

<<<<<<< HEAD

}

game();

function winner() {
  if (playerCount > computerCount) {
    console.log("You win!");
  }
  else if (computerCount > playerCount) {
    console.log("You lose.");
  }
}

=======
// At the end of 5 rounds, compare player vs computer
// IF player has more points, print "You win!"
// ELSE, print "Sorry, computer wins. Better luck next time!"

  if (playerCount > computerCount) {
    console.log("You win!"); 
  }
  else if (computerCount > playerCount) {
    console.log("You lose. Better luck next time.");
  }
  else {
    console.log("Tied!")
  }
}

game();







>>>>>>> 67986955280900ddd074a8a052638d3b4aa58174
