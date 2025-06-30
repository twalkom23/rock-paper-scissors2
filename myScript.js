let playerScore = 0;
let computerScore = 0;

function getComputerChoice() { //Returns the computers choice
    let num = Math.floor(Math.random() * (3) + 1);
    if (num === 1) {
        return 'Rock';
    } else if (num === 2) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function getPlayerChoice() {
    let rockButton = document.querySelector('.rockBtn');
    let paperButton = document.querySelector('.paperBtn');
    let scissorsButton = document.querySelector('.scissorsBtn');
    rockButton.addEventListener('click', () => {
        playRound('Rock');
    })
    paperButton.addEventListener('click', () => {
        playRound('Paper');
    })
    scissorsButton.addEventListener('click', () => {
        playRound('Scissors');
    })
}

function determineWinner(playerMove, compMove) {
    if (playerMove === compMove) {
        return 'Draw';
    } else if(playerMove === 'Scissors' && compMove === 'Paper') {
        return 'Player Wins';
    } else if (playerMove === 'Scissors' && compMove === 'Rock') {
        return 'Computer Wins';
    } else if (playerMove === 'Rock' && compMove === 'Scissors') {
        return 'Player Wins';
    } else if (playerMove === 'Rock' && compMove === 'Paper') {
        return 'Computer Wins';
    } else if (playerMove === 'Paper' && compMove === 'Rock') {
        return 'Player Wins';
    } else if (playerMove === 'Paper' && compMove === 'Scissors');{
        return 'Computer Wins';
    }
}


function playRound(playersMove){
    let compChoice = getComputerChoice();
    let winner = determineWinner(playersMove, compChoice);
    updateScore(winner);
    updateDom(playersMove, compChoice, winner);
    console.log(playersMove);
    console.log(compChoice);
    
}

function updateScore(winner) {
    if (winner === 'Player Wins') {
        playerScore++;
    } else if (winner === 'Computer Wins') {
        computerScore++;
    }
    return;
    
}

function updateDom(playerMove, compMove, winner) {
    let playerScoreHolder = document.querySelector('.playerScore');
    let compScoreHolder = document.querySelector('.computerScore');
    let whoWins = document.querySelector('.whoWins');
    let move = document.querySelector('.movesMade');
    //Update the scoreboard
    playerScoreHolder.textContent = playerScore;
    compScoreHolder.textContent = computerScore;
    //Update the winner
    whoWins.textContent = winner;
    //Update the moves

    
}

//Starts a new round each time a button is clicked
getPlayerChoice();



