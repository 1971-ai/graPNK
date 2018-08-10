"use strict";

var rockBtn = document.getElementById('rock-button');
var paperBtn = document.getElementById('paper-button');
var scissorsBtn = document.getElementById('scissors-button');
var output = document.getElementById('output');
var playerPointsEl = document.getElementById('player-points');
var computerPointsEl = document.getElementById('computer-points');
var playerPoints = 0;
var computerPoints = 0;

function getComputerChoice() {
  var choice = ['rock', 'paper', 'scissors'];
  var randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}

function checkWinner(playerChoice, computerChoice) {
  var winner = 'Player win';
  
  if (playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'scissors' && computerChoice === 'rock')
    {
winner = 'computer win';
      computerPoints++;
    } else if (playerChoice === computerChoice) {
      winner = 'Draw';
    } else { 
    playerPoints++;
    }
  output.innerHTML = 'Result:' + winner + '<br>' + output.innerHTML;
  updatePoints();
}

function updatePoints() {
  playerPointsEl.innerText = playerPoints;
  computerPointsEl.innerText = computerPoints;
}

rockBtn.addEventListener('click', function() {
  checkWinner('rock', getComputerChoice());
});
paperBtn.addEventListener('click', function() {
  checkWinner('paper', getComputerChoice());
});
scissorsBtn.addEventListener('click', function() {
  checkWinner('scissors', getComputerChoice());
});