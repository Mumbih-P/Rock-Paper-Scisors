function playGame(playerSelection) {

  // Generate a random choice for the computer

  const choices = ["rock", "paper", "scissors"];

  playerSelection = playerSelection.toLowerCase();

  if (!choices.includes(playerSelection)) {
    return "Error: Invalid choice! Please enter 'rock', 'paper', or 'scissors'.";
}
  
  const computerSelection = choices[Math.floor(Math.random() * choices.length)];




  // Compare the choices and determine the winner

  if (playerSelection === computerSelection) {

    return "It's a tie!";

  } else if (

    (playerSelection === "rock" && computerSelection === "scissors") ||

    (playerSelection === "paper" && computerSelection === "rock") ||

    (playerSelection === "scissors" && computerSelection === "paper")

  ) {

    return "You win Murife!";

  } else {

    return "Computer wins!";

  }
 

}


function playRound(){
  for(let i=0; i<5; i++){
    const playerSelection = prompt('Round ${i+1}: Enter your choice (rock, paper, or scissors):');

    const result = playGame(playerSelection);
    console.log(`Round ${i+1}: ${result}`);
  }
}



playRound();      
