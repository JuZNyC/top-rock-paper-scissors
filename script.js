console.log("Hello, World!");
let computerScore = 0, humanScore = 0;

/*
Original rps
 */

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

// function getHumanChoice () {
//     let choice = prompt("Enter rock, paper, or scissor").toLowerCase();
//     return choice;
// }

// function playRound (humanChoice , computerChoice = getComputerChoice()) {
//     const rockWin = "You win! Rock beats Scissor";
//     const paperWin = "You win! Paper beats Rock";
//     const scissorWin = "You win!, Scissor beats Paper";
//     const rockLose = "You lose! Paper beats Rock"
//     const paperLose = "You lose! Scissor beats Paper";
//     const scissorLose = "You lose! Rock beats Scissor";
//     const tie = "You tied! Go again!"
//     switch (humanChoice) {
//         case "rock":
//             switch (computerChoice) {
//                 case "scissor":
//                     result.textContent(rockWin);
//                     humanScore++;
//                     break;
//                 case "paper":
//                     result.textContent(rockLose);
//                     computerScore++;
//                     break;
//                 case "rock":
//                     result.textContent(tie);
//             }
//             break;
//         case "scissor":
//             switch (computerChoice) {
//                 case "rock":
//                     result.textContent(scissorLose);
//                     computerScore++;
//                     break;
//                 case "scissor":
//                     result.textContent(tie);
//                     break;
//                 case "paper":
//                     result.textContent(scissorWin);
//                     humanScore++;
//             }
//             break;
//         case "paper":
//             switch(computerChoice) {
//                 case "paper":
//                     result.textContent(tie);
//                     break;
//                 case "rock":
//                     result.textContent(paperWin);
//                     humanScore++;
//                     break;
//                 case "scissor":
//                     result.textContent(paperLose);
//                     computerScore++;
//             }
//     }
// }

// function playGame() {
//     let round = 0;
//     while (round < 5) {
//         playRound();
//         round++;
//     }
//     console.log(`Your final score is ${humanScore} and the computer score is ${computerScore}`)
// }

// playGame();

/* 
revisted rps
*/

// create rock button and add eventlistener

const result = document.createElement("div");
result.textContent = "Rock Scissor Paper?";
const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
resetButton.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    result.textContent = "Rock Scissor Paper?";
});

function playRound (humanChoice , computerChoice = getComputerChoice()) {
    const tie = `Player score: ${humanScore} You tied! Go again! Computer score: ${computerScore}`

    if (humanScore < 5 && computerScore < 5) {
        switch (humanChoice) {
            case "rock":
                switch (computerChoice) {
                    case "scissor":
                        ++humanScore;
                        result.textContent = `Player score: ${humanScore} You win! Rock beats Scissor Computer score: ${computerScore}`;
                        break;
                    case "paper":
                        ++computerScore;
                        result.textContent = `Player score: ${humanScore} You lose! Paper beats Rock Computer score: ${computerScore}`;
                        break;
                    case "rock":
                        result.textContent = tie;
                }
                break;
            case "scissor":
                switch (computerChoice) {
                    case "rock":
                        ++computerScore;
                        result.textContent = `Player score: ${humanScore} You lose! Rock beats Scissor Computer score: ${computerScore}`;
                        break;
                    case "scissor":
                        result.textContent = tie;
                        break;
                    case "paper":
                        ++humanScore;
                        result.textContent = `Player score: ${humanScore} You win!, Scissor beats Paper Computer score: ${computerScore}`;
                }
                break;
            case "paper":
                switch (computerChoice) {
                    case "paper":
                        result.textContent = tie;
                        break;
                    case "rock":
                        ++humanScore;
                        result.textContent = `Player score: ${humanScore} You win! Paper beats Rock Computer score: ${computerScore}`;
                        break;
                    case "scissor":
                        ++computerScore;
                        result.textContent = `Player score: ${humanScore} You lose! Scissor beats Paper Computer score: ${computerScore}`;
                }
        }
    } else if (humanScore >= 5) {
        result.textContent = "You win the game! with a score of " + humanScore + " to " + computerScore;
        result.appendChild(resetButton);

    }
    else {
        result.textContent = "You lose the game! with a score of " + humanScore + " to " + computerScore;
        result.appendChild(resetButton);
    }
}

const buttonRock = document.createElement("button");
buttonRock.textContent = "Rock";
buttonRock.addEventListener("click", () => playRound("rock"))

// create paper button and add eventlistener
const buttonPaper = document.createElement("button");
buttonPaper.textContent = "Paper";
buttonPaper.addEventListener("click", () => playRound("paper"))

// create scissor button and add eventlistener
const buttonScissor = document.createElement("button");
buttonScissor.textContent = "Scissor";
buttonScissor.addEventListener("click", () => playRound("scissor"))

const body = document.querySelector("body");
body.appendChild(result);
body.appendChild(buttonRock);
body.appendChild(buttonPaper);
body.appendChild(buttonScissor);