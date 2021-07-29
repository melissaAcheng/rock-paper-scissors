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
  
  console.log("Player score: ", playerCount);
  console.log("Computer score: ",computerCount);


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

