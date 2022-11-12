"use strict";

const cells = document.querySelectorAll(".cell");
const btn = document.querySelector(".restart-btn");
const player1Score = document.querySelector(".player1");
const player2Score = document.querySelector(".player2");

let flag = true;

const caseWin = [
  [0, 1, 2],
  [0, 3, 6],
  [6, 7, 8],
  [2, 5, 8],
  [1, 4, 7],
  [3, 4, 5],
  [0, 4, 8],
  [2, 4, 7],
];

let player1 = [];
let player2 = [];

let score = {
  p1: 0,
  p2: 0,
};
player1Score.textContent = score.p1;
player2Score.textContent = score.p2;

function changeFlag() {
  if (flag === true) {
    flag = false;
  } else flag = true;
}

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", () => {
    if (flag === true) {
      addCellPlayer1(i);
      // changeFlag();
      console.log(player1);
    } else {
      addCellPlayer2(i);
      // changeFlag();
    }
    chackWinner();
    addScore();
  });
}

function addCellPlayer1(i) {
  cells[i].innerHTML = "X";
  player1.push(i);
  flag = false;
}

function addCellPlayer2(i) {
  cells[i].innerHTML = "O";
  player2.push(i);
  flag = true;
}

function chackWinner() {
  caseWin.find((item) => {
    if (item.filter((i) => player1.includes(i)).length === 3) {
      alert("Player1 won");
      score.p1++;
      restartCells();
      player1 = [];
      player2 = [];
      flag = true;
    } else if (item.filter((i) => player2.includes(i)).length === 3) {
      alert("Player2 won");
      score.p2++;
      restartCells();
      player2 = [];
      player1 = [];
      flag = true;
    }
    return;
  });
}

function addScore() {
  player1Score.textContent = score.p1;
  player2Score.textContent = score.p2;
}

function restartGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
  player1Score.innerHTML = "0";
  player2Score.innerHTML = "0";
  player2 = [];
  player1 = [];
  flag = true;
  score.p1 = 0;
  score.p2 = 0;
}
function restartCells() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
  }
}

btn.addEventListener("click", restartGame);
