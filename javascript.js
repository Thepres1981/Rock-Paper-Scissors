function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let choice = prompt("Enter Rock, Paper, or Scissors:").toLowerCase();
    while (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        choice = prompt("Invalid choice. Please enter Rock, Paper, or Scissors:").toLowerCase();
    }
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); //this makes certain it is case-insensitive
    console.log(`You chose ${humanChoice}`);
    console.log(`The computer choose ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("You are a WINNER!!!");
        humanScore++;
    } else {
    console.log("Computer wins, hope you didn't have money on that!")
    computerScore++;
        }
    }

    function playGame() {
        for (let i = 0; i < 5; i++) {
            const humanChoice = getHumanChoice();
            const computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        }
        console.log(`Final scores - Human: ${humanScore}, Computer: ${computerScore}`);
        }
    playGame();
