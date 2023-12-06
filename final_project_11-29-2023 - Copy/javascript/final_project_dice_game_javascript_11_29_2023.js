


let player1TotalScore = 0;

let player2TotalScore = 0;

let rollsLeft = 3;

function rollDice() {

    if (rollsLeft > 0) {

        const player1Dice1 = rollDie();

        const player1Dice2 = rollDie();

        const player2Dice1 = rollDie();

        const playerDice2 = rollDie();

        const player1RoundScore = calculateScore(player1Dice1, player1Dice2);

        const player2RoundScore = calculateScore(player2Dice1, playerDice2);

        player1TotalScore += player1RoundScore;

        player2TotalScore += player2RoundScore;

        updateDisplay(player1Dice1, player1Dice2, player2Dice1, playerDice2, player1RoundScore, player2RoundScore);

        rollsLeft--;

        if (rollsLeft === 0) {

            endGame();
        }

    } else {

        alert("Game over! Please reset to start a new game.");

    }
}

function resetGame() {

    player1TotalScore = 0;

    player2TotalScore = 0;

    rollsLeft = 3;

    document.getElementById("player1Output", "player2Output").innerHTML = "";

}

function endGame() {

    let winner = "It's a tie!";

    if (player1TotalScore > player2TotalScore) {

        winner = "Congratulations! You win!";

    } else if (player1TotalScore < player2TotalScore) {

        winner = "Sorry, You Lose.";

    }

    document.getElementById("player1Output", "player2Output").innerHTML += `<p id="winner"><strong>${winner}</strong></p>`;

}

function rollDie() {

    return Math.floor(Math.random() * 6) + 1; // Returns a random number between 1 and 6

}

function calculateScore(die1, die2) {

    if (die1 === 1 || die2 === 1) {

        return 0;

    } else if (die1 === die2) {

        return (die1 + die2) * 2;

    } else {

        return die1 + die2;

    }
}

function updateDisplay(player1Dice1, player1Dice2, player2Dice1, player2Dice2, player1RoundScore, player2RoundScore) {

    const player1output = `
        <p>Player 1 Rolls: ${player1Dice1} and ${player1Dice2}</p>

        <p>Player 1 Round Score: ${player1RoundScore}</p>

        <p><strong>Player 1 Total Score: ${player1TotalScore}</strong></p>

        <br>

        <img class="dice" src="dice_images/dice${player1Dice1}.png" alt="Player 1 Dice 1">

        <img class="dice" src="dice_images/dice${player1Dice2}.png" alt="Player 1 Dice 2">

    `;

    const player2output =`

        <p>Player 2 Rolls: ${player2Dice1} and ${player2Dice2}</p>

        <p>Player 2 Round Score: ${player2RoundScore}</p>

        <p><strong>Player 2 Total Score: ${player2TotalScore}</strong></p>

        <br>

        <img class="dice" src="dice_images/dice${player2Dice1}.png" alt="Player 2 Dice 1">

        <img class="dice" src="dice_images/dice${player2Dice2}.png" alt="Player 2 Dice 2">
    `;

    document.getElementById("player1Output").innerHTML = player1output;

    document.getElementById("player2Output").innerHTML = player2output;
}
