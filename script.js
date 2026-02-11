let chosenGame = "";

// Update Foxy's speech bubble
function updateBubble(text) {
  document.getElementById("bubble").innerHTML = text;
}

// Open game links in a new tab
function openGame(url) {
  window.open(url, "_blank");
}

function chooseGame(game) {
  chosenGame = game;

  let storyText = document.getElementById("story-text");
  let choices = document.getElementById("choices");

  if (game === "tic") {
    storyText.innerHTML = "Foxy picks Tic‑Tac‑Toe! Let's go play!";
    updateBubble("Tic‑Tac‑Toe sounds fun!");
    choices.innerHTML =
      '<button onclick="openGame(\'https://playtictactoe.org/\')">Play Tic‑Tac‑Toe</button>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "checkers") {
    storyText.innerHTML = "Foxy chooses Checkers! Time to jump some pieces!";
    updateBubble("Checkers? Ohhh I love strategy!");
    choices.innerHTML =
      '<button onclick="openGame(\'https://www.online-checkers.com/\')">Play Checkers</button>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "cards") {
    storyText.innerHTML = "Foxy decides to play Cards! Shuffle up!";
    updateBubble("Cards! I hope I get a good hand!");
    choices.innerHTML =
      '<button onclick="openGame(\'https://www.solitr.com/\')">Play Cards</button>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }
}

function returnToFoxy() {
  document.getElementById("story-text").innerHTML =
    "Oh boy, that was such a fun game! Thank you for playing, and helping me decide too!";

  updateBubble("That was awesome! Thanks for playing with me!");

  document.getElementById("choices").innerHTML =
    '<button onclick="restart()">Play Again</button>';
}

function restart() {
  document.getElementById("story-text").innerHTML =
    "Let's help Foxy on her day off! Foxy is working hard in college to achieve her goals, but today she finally has some time off from her busy schedule and wants to play a game with you :)";

  updateBubble("Hi again! Want to pick another game?");

  document.getElementById("choices").innerHTML =
    '<button onclick="chooseGame(\'tic\')">Tic‑Tac‑Toe</button>' +
    '<button onclick="chooseGame(\'checkers\')">Checkers</button>' +
    '<button onclick="chooseGame(\'cards\')">Cards</button>';
}
