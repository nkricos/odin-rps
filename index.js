function addScore() {
    currentScore += 1;
    score.textContent = `${currentScore}`;
}

function checkWinner() {
    if (currentScore == 5) {
        
        return alert("Winner!");
    }
}

function resetGame() {
    currentScore = 0;
    return score.textContent = 0;
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection;
    switch(randomNumber) {
        case 0: 
            computerSelection = "Rock";
            break;
        case 1:
            computerSelection = "Paper";
            break;
        case 2:
            computerSelection = "Scissors";
            break;
    }
    return computerSelection;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        results.textContent = `Stalemate!  ${playerSelection} ties ${computerSelection}`;
        console.log(`Stalemate!  ${playerSelection} ties ${computerSelection}`);
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
            results.textContent = `You Win!  ${playerSelection} beats ${computerSelection}`;
            console.log(`You Win!  ${playerSelection} beats ${computerSelection}`);
            addScore();
    } else {
        results.textContent = `You lose!  ${computerSelection} beats ${playerSelection}`;
        console.log(`You lose!  ${computerSelection} beats ${playerSelection}`);
    }
    checkWinner();
}
/*
function parsePlayer(playerWord) {
    playerSelection = playerWord.charAt(0).toUpperCase()
    + playerWord.slice(1).toLowerCase();
    return playerSelection
}
*/
/*
function playGame(rounds) {
    for (i = 0; i < rounds; i++){
        playerSelection = parsePlayer(prompt("Rock, Paper, or Scissors?"));
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}
*/
let playerSelection, computerSelection;
//playGame(5);

const score = document.querySelector('#score');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
let currentScore = 0;
score.textContent = currentScore;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentScore == 5){
            resetGame();
        }
        console.log(button.id);
        playRound(button.id, getComputerChoice());
    });
});
console.log(score);
console.log(buttons);
console.log(results);