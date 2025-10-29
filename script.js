let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let newBtn = document.querySelector(".new-btn");
let msg = document.querySelector(".msg");
let msgContainer = document.querySelector(".msg-container");

const resetGame = () => {
  turnO = true;
  enabledBoxes();
  msgContainer.classList.add("hide");
};
let turnO = true; // player X, player O
const winingPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      console.log("box was clicked");
      box.innerText = "0";
      box.style.color = "green";
      turnO = false;
    } else {
      box.innerText = "X";
      box.style.color = "maroon";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
const showWinner = (winner) => {
  msg.innerText = `Congratulations, winner is ${winner} `;
  msgContainer.classList.remove("hide");
  disabledBoxes();
};
const checkWinner = () => {
  for (let pattern of winingPattern) {
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val === post2Val && post2Val === post3Val) {
        console.log("winner", post1Val);
        showWinner(post1Val);
      }
    }
  }
};
newBtn.addEventListener("click", () => {
  resetGame();
});
resetBtn.addEventListener("click", () => {
  resetGame();
});
