/*
    FUTURE UPDATES: quit the game if the user cancels
    GUI coming soon!
*/

let playerSelection;
let computerSelection;
let playerWins = 0;
let computerWins = 0;

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
    for (let i=1; i < 6; i++) {
        playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

        // make sure player entered either rock, paper, or scissors
        while (playerSelection != "rock" && 
        playerSelection != "paper" && 
        playerSelection != "scissors") {
            playerSelection = prompt("You broke the rules! Pick either rock, paper, or scissors!").toLowerCase();
        }

        getComputerChoice();

        console.log("Match " + i + " of 5:")
        console.log(playRPS(playerSelection, computerSelection));
    }

    if (playerWins > computerWins) {
        console.log("You won! Congratulations!!!!!");
    } else if (computerWins > playerWins) {
        console.log("You lost! The computer won!");
    } else {
        console.log("It was a tie!");
    }
}

game();