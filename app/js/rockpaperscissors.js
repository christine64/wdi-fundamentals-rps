////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    move = getInput();
    if (move === 0) {
        getInput();
    }
    else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    move = randomPlay();
    if (move === 0) {
        randomPlay();
    }
    else {
        return move;
    }
    
}

function getWinner(playerMove,computerMove) {
    var winner;
    if (playerMove === computerMove) {
        return "You have tied!";
    }
    else if (playerMove === "rock") {
        if (computerMove === "scissors") {
            return "rock";
        }
        else {
            return "scissors";
        }
    }
    else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "paper";
        }
        else {
            return "rock";
        }
    }
    else if (playerMove === "scissors") {
        if (computerMove === "paper") {
            return "scissors wins";
        }
        else {
            return "paper";
        }
        return winner;
    }
    
    function playToFive() {
        console.log("Let's play Rock, Paper, Scissors");
        var playerWins = [0];
        var computerWins = [0];
        
        var playerWinsArray;
        var computerWinsArray;
        
        for (getWinner === playerWins; playerWins < 5; playerWins + 1) {
            playerWins.push(playerWinsArray[0]);
        }
        
        for (getWinner === computerWins; computerWins < 5; computerWins + 1) {
            computerWins.push(computerWinsArray[0]);
        }
        
    }
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    
    return [playerWins || computerWins];
}