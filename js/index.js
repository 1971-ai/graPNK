(function(){
  "use strict";


  var output = document.getElementById('output');
  var playerPointsEl = document.getElementById('player-points');
  var computerPointsEl = document.getElementById('computer-points');
  var newGameEl = document.getElementById('new-game');
  var table = document.querySelector('.table-results');

  var params = {
    playerPoints: 0,
    computerPoints: 0,
    progress: [],
    currentRound: 0,
    rounds: 0,
  }
  newGameEl.addEventListener('click', function() {
    params.currentRound = 0;
    table.innerHTML = '';
   params.rounds = +prompt("ile chcesz rozegrać rund");
  }); 
  function getComputerChoice() {
    var choice = ['rock', 'paper', 'scissors'];
    var randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
  }

  function checkWinner(playerChoice, computerChoice) {
    params.currentRound++
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
    params.progress.push({
      player: playerChoice,
      computer: computerChoice,
      winner: winner,
    });
    endGame();
  }
  function endGame() {
    if (params.currentRound == params.rounds) {
      for (var i = 0; i < params.progress.length; i++) {
        table.innerHTML += '<tr><td>'+params.progress[i].player+'</td><td>'+params.progress[i].computer+'</td><td>'+params.progress[i].winner+'</td></tr>';
      }
      showModal();
    }
  }

  function updatePoints() {
    playerPointsEl.innerText = params.playerPoints;
    computerPointsEl.innerText = params.computerPoints;
  }



  var buttons = document.querySelectorAll('.player-move');
 
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      checkWinner(buttons[i].getAttribute('data-move'), getComputerChoice());
    });
  }


  var showModal = function(){
    document.querySelector('#modal-overlay').classList.add('show');
    document.querySelector('#modal').classList.add('show');
  };
  
  var hideModal = function(event){
    event.preventDefault();
    document.querySelector('#modal-overlay').classList.remove('show');
  };
  
  var closeButtons = document.querySelectorAll('.modal .close');
  
  for(var i = 0; i < closeButtons.length; i++){
    closeButtons[i].addEventListener('click', hideModal);
  }
  var modals = document.querySelectorAll('.modal');
  
  for(var i = 0; i < modals.length; i++){
    modals[i].addEventListener('click', function(event){
      event.stopPropagation();
    });
  }
})();