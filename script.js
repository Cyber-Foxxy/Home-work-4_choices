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
    storyText.innerHTML = "Foxy picks Tic-Tac-Toe! Let's go play!";
    updateBubble("Tic-Tac-Toe sounds fun!");
    choices.innerHTML =
      '<button onclick="openGame(\'https://playtictactoe.org/\')">Play Tic-Tac-Toe</button>' +
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
      '<button onclick="retur
;
}
