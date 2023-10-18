let p1, p2, cr, p1g, p2g, currentPlayer, rounds;

function startGame() {
    if (!p1 || !p2) {
        p1 = document.getElementById("player1").value;
        p2 = document.getElementById("player2").value;
    }

    if (p1 === "" || p2 === "") {
        alert("Both players must enter their names.");
        return;
    }

    document.getElementById("gameArea").style.display = "block";
    cr = Math.floor(Math.random() * 101);
    currentPlayer = 1;
    rounds = 0;

    // Add event listeners for the Enter key
    document.getElementById("p1Guess").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            makeGuess();
        }
    });

    document.getElementById("p2Guess").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            makeGuess();
        }
    });

    document.getElementById("p1Guess").focus();
}

function makeGuess() {
    if (currentPlayer === 1) {
        p1g = parseInt(document.getElementById("p1Guess").value);
        if (isNaN(p1g) || p1g < 0 || p1g > 100) {
            alert("Player 1, please enter a number between 0 and 100.");
            return;
        }
        document.getElementById("p2Guess").focus();
        document.getElementById("p2Guess").select();
        currentPlayer = 2;
    } else {
        p2g = parseInt(document.getElementById("p2Guess").value);
        if (isNaN(p2g) || p2g < 0 || p2g > 100) {
            alert("Player 2, please enter a number between 0 and 100.");
            return;
        }
        document.getElementById("p1Guess").focus();
        document.getElementById("p1Guess").select();
        currentPlayer = 1;
        rounds++;

        if (Math.abs(p1g - cr) < Math.abs(p2g - cr)) {
            document.getElementById("player1Area").classList.add("highlight");
            document.getElementById("player2Area").classList.remove("highlight");
        } else if (Math.abs(p1g - cr) > Math.abs(p2g - cr)) {
            document.getElementById("player2Area").classList.add("highlight");
            document.getElementById("player1Area").classList.remove("highlight");
        } else {
            document.getElementById("player1Area").classList.remove("highlight");
            document.getElementById("player2Area").classList.remove("highlight");
        }

        if (rounds >= 5 || p1g === cr || p2g === cr) {
            endGame();
        }
    }
}

function endGame() {
    document.getElementById("correctAnswer").innerHTML = `The correct answer is ${cr}`;
    document.getElementById("gameArea").style.display = "none";
    document.getElementById("restart-button").style.display = "block";

    let winningText = document.getElementById("winningText");
    if (p1g === cr) {
        winningText.innerHTML = `${p1} wins!`;
    } else if (p2g === cr) {
        winningText.innerHTML = `${p2} wins!`;
    } else {
        if (Math.abs(p1g - cr) < Math.abs(p2g - cr)) {
            winningText.innerHTML = `${p1} wins!`;
        } else if (Math.abs(p1g - cr) > Math.abs(p2g - cr)) {
            winningText.innerHTML = `${p2} wins!`;
        } else {
            winningText.innerHTML = "It's a draw!";
        }
    }
    winningText.style.display = "block";
}


function restartGame() {
    document.getElementById("p1Guess").value = "";
    document.getElementById("p2Guess").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("correctAnswer").innerHTML = "";
    document.getElementById("winningText").style.display = "none";
    document.getElementById("restart-button").style.display = "none";
    document.getElementById("player1Area").classList.remove("highlight");
    document.getElementById("player2Area").classList.remove("highlight");
    startGame();
}