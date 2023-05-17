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
        console.log(`Stalemate!  ${playerSelection} ties ${computerSelection}`);
    } else if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")) {
        console.log(`You Win!  ${playerSelection} beats ${computerSelection}`);
    } else {
        console.log(`You lose!  ${computerSelection} beats ${playerSelection}`);
    }
}

function parsePlayer(playerWord) {
    playerSelection = playerWord.charAt(0).toUpperCase()
    + playerWord.slice(1).toLowerCase();
    return playerSelection
}

function playGame(rounds) {
    for (i = 0; i < rounds; i++){
        playerSelection = parsePlayer(prompt("Rock, Paper, or Scissors?"));
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
}

let playerSelection, computerSelection;
playGame(5);

