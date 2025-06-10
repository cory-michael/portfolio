let secretNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 15;

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");
  const userGuess = Number(guessInput.value);

  if (attemptsLeft <= 0) {
    message.textContent = "Game Over! Click 'Restart' to play again.";
    guessInput.disabled = true;
    return; // Stop the function
  }

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "Enter a number between 1 and 100.";
    return;
  }

  if (userGuess === secretNumber) {
    message.textContent = "Congratulations! You Nailed it";
    guessInput.disabled = true;
  } else {
    attemptsLeft--;
    attempts.textContent = attemptsLeft;

    if (attemptsLeft === 0) {
      message.textContent = "Game Over! Click 'Restart' to play again.";
      guessInput.disabled = true;
    } else {
      message.textContent = userGuess < secretNumber
        ? "Too small! Try a higher number."
        : "Too high! Try a lower number.";
    }
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("attempts").textContent = attemptsLeft;
  document.getElementById("message").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
}