let playerSelection = "rock";
let playerScore = 0; 
let computerScore = 0; 

function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    console.log(playerSelection, computerSelection)
    if (playerSelection === computerSelection) {
        return `It was a draw both parties selected ${playerSelection}`
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')

    ) {
        playerScore++ 
    } else {
        computerScore++
    }
}


playRound(playerSelection)
console.log({playerScore}, {computerScore})
