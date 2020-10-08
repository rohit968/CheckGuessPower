let guesses = [];
let correctNumber = getRandomNumber();

//This will load as the program loads

window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("reset-game").addEventListener("click", initGame);
};

//THis is the main function of the game

function playGame() {
  let numberGuess = document.getElementById("number-guess").value;
  displayResult(numberGuess);
  saveGuessHistory(numberGuess);
  displayHistory();
}

//This function displays the result

function displayResult(numberGuess) {
  if (numberGuess > correctNumber) {
    showNumberAbove();
  } else if (numberGuess < correctNumber) {
    showNumberBelow();
  } else {
    showYouWon();
  }
}

//This function is for the reset of the game

function initGame() {
  correctNumber = getRandomNumber();
  document.getElementById("result").innerHTML = "";
  guesses = [];
  displayHistory();
}

//This is used to get the random number

function getRandomNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  return randomNumber;
}

//This function gets the high, low and winning message

function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

//This function displays the win message

function showYouWon() {
  const text = "Awesome job, you got it!";
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

//This function displays the high message
function showNumberAbove() {
  const text = "Your number is too high!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

//This function displays the low message
function showNumberBelow() {
  const text = "Your number is too low!";
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

//This function saves the guess in the guesses array
function saveGuessHistory(guess) {
  guesses.push(guess);
}

//This function displays the history of the guesses made by the user
function displayHistory() {
  let index = guesses.length - 1;
  let list = "<ul class='list-group'>";

  while (index >= 0) {
    list +=
      "<li class='list-group-item'>" +
      "You guessed " +
      guesses[index] +
      "</li>";
    index -= 1;
  }
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}
