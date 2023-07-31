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
    // Determine if it was a tie
    if (playerSelection === computerSelection) {
        return `It was a tie, both parties selected ${playerSelection}`
    // Determine if player won the round
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')

    ) {
        playerScore++ 
        return `You won! ${playerSelection} beats ${computerSelection}`
    // Computer won round 
    } else {
        computerScore++
        return `You lost! ${playerSelection} gets beaten by ${computerSelection}`
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        console.log(`You won!`)
    } else {
        console.log('You lost!')
    }
}

function game() {
    if (playerScore < 3 && computerScore < 3) {
        playRound(playerSelection)
        console.log({playerScore}, {computerScore})
        game()
    } else {
        determineWinner()
    }
}

game()



