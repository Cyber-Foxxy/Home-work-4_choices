// Variables
let chosenGame = "";

// Function triggered when a game is selected
function chooseGame(game) {
  chosenGame = game;

  let storyText = document.getElementById("story-text");
  let choices = document.getElementById("choices");

  if (game === "tic") {
    storyText.innerHTML =
      "Foxy picks Tic‑Tac‑Toe! Let's go play!";
    choices.innerHTML =
      '<a href="https://playtictactoe.org/" target="_blank"><button>Play Tic‑Tac‑Toe</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "checkers") {
    storyText.innerHTML =
      "Foxy chooses Checkers! Time to jump some pieces!";
    choices.innerHTML =
      '<a href="https://www.online-checkers.com/" target="_blank"><button>Play Checkers</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "cards") {
    storyText.innerHTML =
      "Foxy decides to play Cards! Shuffle up!";
    choices.innerHTML =
      '<a href="https://solitaired.com/" target="_blank"><button>Play Cards</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }
}

// After returning from the game
function returnToFoxy() {
  let storyText = document.getElementById("story-text");
  let choices = document.getElementById("choices");

  storyText.innerHTML =
    "Oh boy, that was such a fun game! Thank you for playing, and helping me decide too!";

  choices.innerHTML =
    '<button onclick="restart()">Play Again</button>';
}

// Restart the adventure
function restart() {
  document.getElementById("story-text").innerHTML =
    "Foxy finally has a day off work! She wants to play a game today… but she can’t decide which one!";
  
  document.getElementById("choices").innerHTML =
    '<button onclick="chooseGame(\'tic\')">Tic‑Tac‑Toe</button>' +
    '<button onclick="chooseGame(\'checkers\')">Checkers</button>' +
    '<button onclick="chooseGame(\'cards\')">Cards</button>';
}
