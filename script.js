
let playerScore = 0; 
let computerScore = 0; 

const displayPlayerScore = document.querySelector('#player-score')
const displayComputerScore = document.querySelector('#computer-score')
const displayGameMessage = document.querySelector('#game-message')
const selectionButtons = document.querySelectorAll(".btn")

selectionButtons.forEach(button => {
    button.addEventListener("click", selection)
})

function selection(e) {
    const playerSelection = e.target.textContent.toLowerCase();
    game(playerSelection)

}
function getComputerChoice() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice()
    console.log(playerSelection, computerSelection)
    capitalizedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.substring(1);
    // Determine if it was a tie
    if (playerSelection === computerSelection) {
        displayGameMessage.textContent = `It was a tie: both parties selected ${playerSelection}`
    // Determine if player won the round
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')

    ) {
        playerScore++
        displayPlayerScore.textContent = playerScore
        displayGameMessage.textContent = `${capitalizedPlayerSelection} beats ${computerSelection}`
    // Computer won round 
    } else {
        computerScore++
        displayComputerScore.textContent = computerScore
        displayGameMessage.textContent = `${capitalizedPlayerSelection} gets beaten by ${computerSelection}`
    }
}

function determineWinner() {
    if (playerScore > computerScore) {
        displayGameMessage.textContent = "Great! You won the  game!"
    } else {
        displayGameMessage.textContent = "Too bad, the computer won the game.."
    }
}

function game(playerSelection) {
    if (playerScore < 3 && computerScore < 3) {
        playRound(playerSelection)
    } else {
        determineWinner()
    }
}




