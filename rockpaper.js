document.addEventListener('DOMContentLoaded', () => {
    let playerScore = 0;
    let computerScore = 0;

    function playGame(playerSelection) {
        const choices = ["rock", "paper", "scissors"];

        playerSelection = playerSelection.toLowerCase();

       const computerSelection = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (playerSelection === computerSelection) {
            result = "It's a tie!";
        } else if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper")
        ) {
            result = "You win this round Victor. but villain is still breathing. Keep going!";
            playerScore++;
        } else {
            result = "Computer wins this round! Keep going";
            computerScore++;
        }

        displayResult(result);
        updateScore();

        if (playerScore === 5) {
            displayResult("Congratulations! Villain is no more. You're a Victor!");
            resetGame();
        } else if (computerScore === 5) {
            displayResult("Computer wins the game! Better luck next time.");
            resetGame();
        }
    }

    function displayResult(result) {
        const resultDiv = document.getElementById("result");
        resultDiv.textContent = result;
        resultDiv.setAttribute('aria-live', 'assertive');
    }

    function updateScore() {
        const scoreDiv = document.getElementById("score");
        scoreDiv.textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
        scoreDiv.setAttribute('aria-live', 'polite');
    }

    function resetGame() {
        playerScore = 0;
        computerScore = 0;
        updateScore();
    }

    updateScore();

    document.getElementById('rock').addEventListener('click', () => playGame('rock'));
    document.getElementById('paper').addEventListener('click', () => playGame('paper'));
    document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
});
