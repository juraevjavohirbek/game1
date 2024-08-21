const boxes = document.querySelectorAll(".box");

let key = 1;
let scorePlayer = 0;
let scoreBot = 0;

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    boxes.forEach((b) => b.classList.remove("clicked"));
    box.classList.add("clicked");
    key = parseInt(box.querySelector(".key").textContent);
  });
});

const result = document.querySelector(".result");
const btn = document.querySelector(".btn-play");

btn.addEventListener("click", () => {
  const isClicked = document.querySelector(".box.clicked");

  if (!isClicked) {
    alert("Please select an option before playing!");
    return;
  }

  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const bots = document.querySelectorAll(".bot");
  let keyBot = 1;

  let totalPlayer = document.querySelector(".totalPlayer");
  let totalBot = document.querySelector(".totalBot");

  bots.forEach((bot) => {
    bot.classList.remove("clicked");
  });

  bots.forEach((bot) => {
    keyBot = parseInt(bot.querySelector(".key").textContent);
    if (randomNumber === keyBot) {
      bot.classList.add("clicked");
    }
  });

  if (key === randomNumber) {
    result.textContent = "It's a tie!";
  } else if (
    (key === 1 && randomNumber === 2) || // Rock beats Scissors
    (key === 2 && randomNumber === 3) || // Scissors beat Paper
    (key === 3 && randomNumber === 1) // Paper beats Rock
  ) {
    result.textContent = "Player wins!";
    scorePlayer++;
    totalPlayer.textContent = `Player ${scorePlayer} : `;
  } else {
    result.textContent = "Bot wins!";
    scoreBot++;
    totalBot.textContent = `${scoreBot} Bot`;
  }

  if (scorePlayer === 10) {
    showModal(
      `Total score is ${scorePlayer} : ${scoreBot}`,
      "You are the Winner!"
    );
  } else if (scoreBot === 10) {
    showModal(`Total score is ${scorePlayer} : ${scoreBot}`, "Bot Wins!");
  }
});

function showModal(totalScoreText, winnerText) {

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
        <h3 class="modal-total">${totalScoreText}</h3>
        <h1 class="modal-winner">${winnerText}</h1>
        <h3 class="restart">Renew The Web Page To Play Again</h3>`;
  document.body.appendChild(modal);
}
