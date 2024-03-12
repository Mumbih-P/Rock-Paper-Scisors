function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}
const computerChoice = getComputerChoice();
console.log("Computer chose: " + computerChoice);
