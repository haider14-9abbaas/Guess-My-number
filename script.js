let secretNumber, score, highscore = 0;

function resetGame() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.getElementById('score').textContent = score;
  document.getElementById('message').textContent = 'Start guessing...';
  document.getElementById('numberDisplay').textContent = '?';
  document.getElementById('guessInput').value = '';
  document.body.style.background = '#18191b';
}

function displayMessage(msg) {
  document.getElementById('message').textContent = msg;
}

document.getElementById('check').addEventListener('click', function() {
  const guess = Number(document.getElementById('guessInput').value);
  if (!guess) {
    displayMessage('⛔ No number!');
  } else if (guess < 1 || guess > 20) {
    displayMessage('⛔ Guess between 1-20!');
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.getElementById('numberDisplay').textContent = secretNumber;
    document.body.style.background = '#44c767';
    if (score > highscore) {
      highscore = score;
      document.getElementById('highscore').textContent = highscore;
    }
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      document.getElementById('score').textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      document.getElementById('score').textContent = 0;
      document.body.style.background = '#d7263d';
      document.getElementById('numberDisplay').textContent = secretNumber;
    }
  }
});

document.getElementById('again').addEventListener('click', resetGame);

// Allow enter key to check
document.getElementById('guessInput').addEventListener('keyup', function(e){
  if(e.key === 'Enter'){
    document.getElementById('check').click();
  }
});

// Initial game start
resetGame();
