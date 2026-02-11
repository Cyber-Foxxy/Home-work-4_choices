let chosenGame = "";

// Update Foxy's speech bubble
function updateBubble(Yeah, that sounds fun! lets play!) {
  document.getElementById("bubble").innerHTML = lets play!;
}

function chooseGame(game) {
  chosenGame = game;

  let storyText = document.getElementById("Lets help Foxy on her day off! Foxy is working hard in college to achive her goals, but today she finally has some time off from her busy schedual, and wants to play a game with you :) ");
  let choices = document.getElementById("choices");

  if (game === "tic") {
    storyText.innerHTML = "Foxy picks Tic‑Tac‑Toe! Let's go play!";
    updateBubble("Tic‑Tac‑Toe sounds fun!");
    choices.innerHTML =
      '<a href="https://playtictactoe.org/" target="_blank"><button>Play Tic‑Tac‑Toe</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "checkers") {
    storyText.innerHTML = "Foxy chooses Checkers! Time to jump some pieces!";
    updateBubble("Checkers? Ohhh I love strategy!");
    choices.innerHTML =
      '<a href="https://www.online-checkers.com/" target="_blank"><button>Play Checkers</button></a>' +
      '<button onclick="returnToFoxy()">Return to Foxy</button>';
  }

  if (game === "cards") {
    storyText.innerHTML = "Foxy decides to play Cards! Shuffle up!";
    updateBubble("Cards! I hope I get a good hand!");
    choices.innerHTML =
      '<a href="https://solitaired.com/" target="_blank"><button>Play Cards</button></a>' +
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
    "Foxy finally has a day off work! She wants to play a game today… but she can’t decide which one!";

  updateBubble("Hi again! Want to pick another game?");

  document.getElementById("choices").innerHTML =
    '<button onclick="chooseGame(\'tic\')">Tic‑Tac‑Toe</button>' +
    '<button onclick="chooseGame(\'checkers\')">Checkers</button>' +
    '<button onclick="chooseGame(\'cards\')">Cards</button>';
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
