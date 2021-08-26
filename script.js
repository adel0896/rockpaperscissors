"use strict";
let winner = "computer";

let userchoice;
let computerchoice;
const user = document.querySelector("#player1");
const computer = document.querySelector("#player2");

window.addEventListener("DOMContentLoaded", start);
function start() {
  console.log("start");
  getPlayerChoice();
}
function getPlayerChoice() {
  console.log("getPlayerChoice");

  document.querySelector(".rock").addEventListener("click", function () {
    console.log("function rock works");
    userchoice = "rock";
    showAnimations();
  });
  document.querySelector(".paper").addEventListener("click", function () {
    console.log("function paper works");
    userchoice = "paper";

    showAnimations();
  });
  document.querySelector(".scissors").addEventListener("click", function () {
    console.log("function scissors works");
    userchoice = "scissors";

    showAnimations();
  });
  showAnimations();
}
function makeRandomComputerChoice() {
  console.log("makeRandomComputerChoice");
  var arr = ["rock", "paper", "scissors"];
  computerchoice = arr[Math.floor(Math.random() * arr.length)];
  console.log(computerchoice);
  showAnimations();
}
function shake() {
  document.querySelector("#player1").classList.add("shake");
  document.querySelector("#player2").classList.add("shake");
}
function showAnimations() {
  document.querySelector(".button1").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomComputerChoice();
  });
  document.querySelector(".button2").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomComputerChoice();
  });
  document.querySelector(".button3").addEventListener("click", function () {
    document.querySelector("#win").classList.add("hidden");
    document.querySelector("#lose").classList.add("hidden");
    document.querySelector("#draw").classList.add("hidden");
    shake();
    makeRandomComputerChoice();
  });

  console.log("showAnimations");
  if (userchoice === "rock") {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("paper");
      document.querySelector("#player1").classList.remove("scissors");
      document.querySelector("#player1").classList.add("rock");
    });
  } else if (userchoice === "paper") {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("rock");
      document.querySelector("#player1").classList.remove("scissors");
      document.querySelector("#player1").classList.add("paper");
    });
  } else {
    document.querySelector("#player1").addEventListener("animationend", function () {
      document.querySelector("#player1").classList.remove("shake");
      document.querySelector("#player1").classList.remove("rock");
      document.querySelector("#player1").classList.remove("paper");
      document.querySelector("#player1").classList.add("scissors");
    });
  }
  if (computerchoice === "rock") {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("paper");
      document.querySelector("#player2").classList.remove("scissors");
      document.querySelector("#player2").classList.add("rock");
      determineWinner();
    });
  } else if (computerchoice === "paper") {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("rock");
      document.querySelector("#player2").classList.remove("scissors");
      document.querySelector("#player2").classList.add("paper");
      determineWinner();
    });
  } else {
    document.querySelector("#player2").addEventListener("animationend", function () {
      document.querySelector("#player2").classList.remove("shake");
      document.querySelector("#player2").classList.remove("rock");
      document.querySelector("#player2").classList.remove("paper");
      document.querySelector("#player2").classList.add("scissors");
      determineWinner();
    });
  }
}

function determineWinner() {
  console.log("determineWinner");
  if (computerchoice === userchoice) {
    showDraw();
  }
  if (computerchoice === "rock" && userchoice === "paper") {
    showWin();
  }
  if (computerchoice === "rock" && userchoice === "scissors") {
    showLose();
  }
  if (computerchoice === "paper" && userchoice === "rock") {
    showLose();
  }
  if (computerchoice === "paper" && userchoice === "scissors") {
    showWin();
  }
  if (computerchoice === "scissors" && userchoice === "paper") {
    showLose();
  }
  if (computerchoice === "scissors" && userchoice === "rock") {
    showWin();
  }
}
function showWin() {
  console.log("showWin");
  document.querySelector("#win").classList.remove("hidden");
  start();
}
function showLose() {
  console.log("showLose");
  document.querySelector("#lose").classList.remove("hidden");
  start();
}
function showDraw() {
  console.log("showDraw");
  document.querySelector("#draw").classList.remove("hidden");
  start();
}
