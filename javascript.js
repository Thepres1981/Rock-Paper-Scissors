
const choicesContainer = document.getElementById('choices');
const playerScoreDisplay = document.getElementById('player-score');
const computerScoreDisplay = document.getElementById('computer-score');
const resultDisplay = document.getElementById('result');
const resetButton = document.getElementById('reset-btn');

let playerScore = 0;
let computerScore = 0;

document.addEventListener('DOMContentLoaded', () => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    choices.forEach(createButton);
});

function createButton(choice) {
    const button = document.createElement('button');
    button.textContent = choice;
    button.addEventListener('click', () => playRound(choice, getComputerChoice()));
    choicesContainer.appendChild(button);
}

function updateScore() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function displayResult(result) {
    resultDisplay.textContent = result;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    displayResult('');
    const buttons = document.querySelectorAll('#choices button');
    buttons.forEach(button => {
        button.disabled = false;
    });
}

resetButton.addEventListener('click', resetGame);

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const wins = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    const result = humanChoice === computerChoice ? "It's a tie!" :
                   wins[humanChoice] === computerChoice ? "You win!" : "You lose!";
    displayResult(`You chose ${humanChoice}. The computer chose ${computerChoice}. ${result}`);

    if (result === "You win!") {
        playerScore++;
    } else if (result === "You lose!") {
        computerScore++;
    }

    updateScore();
    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    if (playerScore >= computerScore) {
        displayResult("Winner Winner Turkey and a Big Fat Steak Dinner!");
    } else {
        displayResult("CLOSE BUT NO CIGAR!");
    }
    const buttons = document.querySelectorAll('#choices button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}

       
  

