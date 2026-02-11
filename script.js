let chosenGame = "";

// Update Foxy's speech bubble
function updateBubble(text) {
  document.getElementById("bubble").innerHTML = text;
}

function chooseGame(game) {
  chosenGame = game;

  let storyText = document.getElementById("story-text");
  let choices = document.getElementById("choices");

  if (game === "tic") {
    storyText.innerHTML = "Foxy picks Tic‑Tac‑Toe! Let's go play!";
    updateBubble("Yeah, that sounds fun! Let's play Tic‑Tac‑Toe!");
    choices.innerHTML =
      '<a href="https://playtictactoe.org/" target="_blank"><button>Play Tic‑Tac‑Toe</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "checkers") {
    storyText.innerHTML = "Foxy chooses Checkers! Time to jump some pieces!";
    updateBubble("Ooooh Checkers! I love strategy games!");
    choices.innerHTML =
      '<a href="https://www.online-checkers.com/" target="_blank"><button>Play Checkers</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "cards") {
    storyText.innerHTML = "Foxy decides to play Cards! Shuffle up!";
    updateBubble("Cards? Shuffle shuffle! Let's see if I get a good hand!");
    choices.innerHTML =
      '<a href="https://www.solitr.com/" target="_blank"><button>Play Cards</button></a>' +
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

    '<button onclick="chooseGame(\'tic\')">Tic‑Tac‑Toe</button>' +
    '<button onclick="chooseGame(\'checkers\')">Checkers</button>' +
    '<button onclick="chooseGame(\'cards\')">Cards</button>';
}
