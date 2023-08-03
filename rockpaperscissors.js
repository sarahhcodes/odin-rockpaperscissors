let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;
let matchNumber = 0;
let gameOver = false;

const buttons = document.querySelectorAll('button');
const div = document.querySelector('div');
const displayedResults = document.createElement('p');
const scoreboard = document.createElement('div');

// initialize displayed results
displayedResults.textContent = "pick your choice";
div.appendChild(displayedResults);

// function that selects the computer's choice and stores it in computerSelection
function getComputerChoice() {
    // select random number from 0 to 2
    let randomNumber = Math.floor(Math.random() * 3);

    // choose rock, paper, or scissors depending on number
    if (randomNumber == 0) {
        computerSelection = "rock";
    } else if (randomNumber == 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

// function that plays Rock Paper Scissors
function playRPS(player, computer) {
    if (player == "rock" && computer == "paper") {
        computerWins++;
        return "You lose! Paper beats rock.";
    } else if (player == "rock" && computer == "scissors") {
        playerWins++;
        return "You win! Rock beats scissors";
    } else if (player == "rock" && computer == "rock") {
        return "It's a tie! You both picked rock!";
    } else if (player == "paper" && computer == "rock") {
        playerWins++;
        return "You win! Paper beats rock.";
    } else if (player == "paper" && computer == "scissors") {
        computerWins++;
        return "You lose! Scissors beat rock.";
    } else if (player == "paper" && computer == "paper") {
        return "It's a tie! You both picked paper!";
    } else if (player == "scissors" && computer == "rock") {
        computerWins++;
        return "You lose! Rock beats scissors";
    } else if (player == "scissors" && computer == "paper") {
        playerWins++;
        return "You win! Scissors beat paper."
    } else if (player == "scissors" && computer == "scissors") {
        return "It's a tie! You both picked scissors!"
    } else {
        return "Invalid entry. Next round make sure you pick either rock, paper, or scisors!"
    }
}

// function that calls the game
function game() {
    if(!gameOver) {
        displayedResults.textContent = playRPS(playerSelection,computerSelection);
        matchNumber++;

        if (playerWins >= 5 || computerWins >= 5) { 
            gameOver = true;

            if (playerWins > computerWins) {
                displayedResults.textContent = "You won! Congratulations!!!!!";
            } else if (computerWins > playerWins) {
                displayedResults.textContent = "You lost! The computer won!";
            } else {
                displayedResults.textContent = "It was a tie!";
            }
        }

        scoreboard.textContent = "player score: " + playerWins + " computer score: " + computerWins;
        div.appendChild(scoreboard);
        div.appendChild(displayedResults);
    }
}

// gets the player's choice depending on the button they click
function getPlayerChoice(click) {
    playerSelection = click.classList.value;
}

buttons.forEach(button => button.addEventListener('click', e => {
    getPlayerChoice(e.target);  
    getComputerChoice();
    game();
}));