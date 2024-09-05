document.addEventListener("DOMContentLoaded", () => {
  const playStopButton = document.getElementById("play-stop-button");
  const audioElements = document.querySelectorAll("audio");
  let isPlaying = false;

  // Initially mute all audio elements
  audioElements.forEach((audio) => {
    audio.muted = true;
  });

  // Play or stop all audio elements
  playStopButton.addEventListener("click", () => {
    if (!isPlaying) {
      audioElements.forEach((audio) => {
        audio.play();
      });
      playStopButton.textContent = "Stop";
    } else {
      audioElements.forEach((audio) => {
        audio.pause();
        audio.currentTime = 0; // Reset to start
      });
      playStopButton.textContent = "Play";
    }
    isPlaying = !isPlaying;
  });
});

// PONG MINIGAME

padel1Y = padel2Y = 80;
padelWidth = 10;
padelHeight = 100;
ballX = ballY = 50;
ballDimension = 6;
velocityX = velocityY = 4;
score1 = score2 = 0;
aiSpeed = 3;

window.onload = function () {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  setInterval(update, 1000 / 30);
  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp") {
      padel1Y -= 5;
      event.preventDefault();
    } else if (event.key === "ArrowDown") {
      padel1Y += 5;
      event.preventDefault();
    }
  });
};

// Reset ball and padels after a player scores
function reset() {
  ballX = canvas.width / 2;
  ballY = canvas.height / 2;
  velocityX = -velocityX;
  velocityY = 4;
}

function update() {
  padel1Y = Math.max(0, Math.min(padel1Y, canvas.height - padelHeight));

  ballX += velocityX;
  ballY += velocityY;

  if (ballY < 0 && velocityY < 0) {
    velocityY = -velocityY;
  }

  if (ballY > canvas.height && velocityY > 0) {
    velocityY = -velocityY;
  }

  if (ballX > canvas.width) {
    if (ballY > padel2Y && ballY < padel2Y + padelHeight) {
      velocityX = -velocityX;
      deltaY = ballY - (padel2Y + padelHeight / 2);
      velocityY = deltaY * 0.3;
    } else {
      score1++;
      reset();
    }
  }

  if (ballX < 0) {
    if (ballY > padel1Y && ballY < padel1Y + padelHeight) {
      velocityX = -velocityX;
      deltaY = ballY - (padel1Y + padelHeight / 2);
      velocityY = deltaY * 0.3;
    } else {
      score2++;
      reset();
    }
  }

  if (padel2Y + padelHeight / 2 < ballY) {
    padel2Y += aiSpeed;
  } else {
    padel2Y -= aiSpeed;
  }

  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "black";
  ctx.fillRect(0, padel1Y, padelWidth, padelHeight);
  ctx.fillRect(canvas.width - padelWidth, padel2Y, padelWidth, padelHeight);
  ctx.fillRect(
    ballX - ballDimension / 2,
    ballY - ballDimension / 2,
    ballDimension,
    ballDimension
  );
  ctx.font = "3rem Fustat";
  ctx.fillText(score1, 100, 100);
  ctx.fillText(score2, canvas.width - 100, 100);
}
