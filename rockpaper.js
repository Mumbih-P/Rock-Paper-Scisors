document.addEventListener('DOMContentLoaded', () => {
  let playerScore = 0;
  let computerScore = 0;

  function playGame(playerSelection) {
      // Generate a random choice for the computer
      const choices = ["rock", "paper", "scissors"];

      playerSelection = playerSelection.toLowerCase();

      if (!choices.includes(playerSelection)) {
          displayResult("Error: Invalid choice! Please enter 'rock', 'paper', or 'scissors'.");
          return;
      }

      const computerSelection = choices[Math.floor(Math.random() * choices.length)];

      // Compare the choices and determine the winner
      let result;
      if (playerSelection === computerSelection) {
          result = "It's a tie!";
      } else if (
          (playerSelection === "rock" && computerSelection === "scissors") ||
          (playerSelection === "paper" && computerSelection === "rock") ||
          (playerSelection === "scissors" && computerSelection === "paper")
      ) {
          result = "You win this round!";
          playerScore++;
      } else {
          result = "Computer wins this round!";
          computerScore++;
      }

      // Update the score display
      displayResult(result);
      updateScore();

      // Check if there is a winner
      if (playerScore === 5) {
          displayResult("Congratulations! You won the game!");
          resetGame();
      } else if (computerScore === 5) {
          displayResult("Computer wins the game! Better luck next time.");
          resetGame();
      }
  }

  function displayResult(result) {
      document.getElementById("result").textContent = result;
  }

  function updateScore() {
      document.getElementById("score").textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
  }

  function resetGame() {
      playerScore = 0;
      computerScore = 0;
      updateScore();
  }

  // Initialize the score display on page load
  updateScore();

  // Add event listeners to the buttons
  document.getElementById('rock').addEventListener('click', () => playGame('rock'));
  document.getElementById('paper').addEventListener('click', () => playGame('paper'));
  document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
});
