let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  loses: 0,
  ties: 0,
};
updateScoreElement();

function pickComputermove() {
  const randomNumber = Math.random();
  let computerMove = "";
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissors";
  }
  return computerMove;
}
function playGame(playerMove) {
  const computerMove = pickComputermove();
  let result = "";
  if (computerMove === "rock") {
    if (playerMove === "rock") {
      result = "Tie.";
    } else if (playerMove === "scissors") {
      result = "You lose.";
    } else {
      result = "You win.";
    }
  } else if (computerMove === "paper") {
    if (playerMove === "rock") {
      result = "You lose.";
    } else if (playerMove === "scissors") {
      result = "You win.";
    } else {
      result = "Tie.";
    }
  } else {
    if (playerMove === "rock") {
      result = "You win.";
    } else if (playerMove === "scissors") {
      result = "Tie.";
    } else {
      result = "You lose.";
    }
  }
  if (result === "You win.") {
    score.wins++;
  } else if (result === "You lose.") {
    score.loses++;
  } else {
    score.ties++;
  }
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();
  document.querySelector(".js-result").innerHTML = result;

  document.querySelector(".js-moves").innerHTML = `You
        <img src="images/${playerMove}-emoji.png" class="move-icon">
        <img src="images/${computerMove}-emoji.png" class="move-icon">
        Computer`;
}
function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = `Wins: ${score.wins} Loses: ${score.loses} Ties: ${score.ties}`;
}
