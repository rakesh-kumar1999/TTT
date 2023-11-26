console.log("Welcome to tic tac toe");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "x";

// Function to change the turn
const changeTurn = () => {
  return turn === "x" ? "0" : "x";
};

// Function to check for win
const checkwin = () => {
  // Implement your win checking logic here
};

// Game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector('.boxText');
  element.addEventListener('click', () => {
    if (boxText.innerText === '') {
      boxText.innerText = turn;
      turn = changeTurn();
      audioTurn.play();
      checkwin();
      document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    }
  });
});
