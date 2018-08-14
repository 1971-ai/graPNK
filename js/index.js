"use strict";


var output = document.getElementById('output');
var playerPointsEl = document.getElementById('player-points');
var computerPointsEl = document.getElementById('computer-points');

var params = {
  playerPoints: 0,
  computerPoints: 0,
}
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
      params.computerPoints++;
    } else if (playerChoice === computerChoice) {
      winner = 'Draw';
    } else { 
    params.playerPoints++;
    }
  output.innerHTML = 'Result:' + winner + '<br>' + output.innerHTML;
  updatePoints();
}

function updatePoints() {
  playerPointsEl.innerText = params.playerPoints;
  computerPointsEl.innerText = params.computerPoints;
}



var buttons = documnet.querySelectorAll('.player-move');
for(var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    checkWinner(buttons[i].getAttribute('data-move'), getComputerChoice());
  });
}
