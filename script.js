console.log("Hello, World!");
let computerScore = 0, humanScore = 0;

function getComputerChoice() {
    let rand_num = Math.floor(Math.random() * 3);
    let choice = "";
    switch (rand_num) {
        case 0:
            choice = "rock";
            break;
        case 1:
            choice = "paper";
            break;
        case 2:
            choice = "scissor";
    }
    return choice;
}

function getHumanChoice () {
    let choice = prompt("Enter rock, paper, or scissor").toLowerCase();
    return choice;
}

function playRound (humanChoice = getHumanChoice(), computerChoice = getComputerChoice()) {
    const rockWin = "You win! Rock beats Scissor";
    const paperWin = "You win! Paper beats Rock";
    const scissorWin = "You win!, Scissor beats Paper";
    const rockLose = "You lose! Paper beats Rock"
    const paperLose = "You lose! Scissor beats Paper";
    const scissorLose = "You lose! Rock beats Scissor";
    const tie = "You tied! Go again!"
    switch (humanChoice) {
        case "rock":
            switch (computerChoice) {
                case "scissor":
                    console.log(rockWin);
                    humanScore++;
                    break;
                case "paper":
                    console.log(rockLose);
                    computerScore++;
                    break;
                case "rock":
                    console.log(tie);
            }
            break;
        case "scissor":
            switch (computerChoice) {
                case "rock":
                    console.log(scissorLose);
                    computerScore++;
                    break;
                case "scissor":
                    console.log(tie);
                    break;
                case "paper":
                    console.log(scissorWin);
                    humanScore++;
            }
            break;
        case "paper":
            switch(computerChoice) {
                case "paper":
                    console.log(tie);
                    break;
                case "rock":
                    console.log(paperWin);
                    humanScore++;
                    break;
                case "scissor":
                    console.log(paperLose);
                    computerScore++;
            }
    }
}

function playGame() {
    let round = 0;
    while (round < 5) {
        playRound();
        round++;
    }
    console.log(`Your final score is ${humanScore} and the computer score is ${computerScore}`)
}

playGame();