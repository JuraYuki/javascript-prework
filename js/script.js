
function playGame(playerInput){
  clearMessages();

  const randomNumber = Math.floor(Math.random() * 3 + 1);
  console.log('Wylosowana liczba to: ' + randomNumber);

  function getMoveName(argMoveId){
    if(argMoveId == 1){
      printMessage("Wylosowano kamień");
      return 'kamień';
    } else if(argMoveId == 2){
      printMessage("Wylosowano papier");
      return 'papier';
    } else if(argMoveId == 3){
      printMessage("Wylosowano nożyce");
      return 'nożyce';
    } else {
      printMessage('Nie znam ruchu o id ' + argMoveId + '.');
      return 'nieznany ruch';
    }
  }

  function displayResult(argComputerMove, argPlayerMove){

    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

    if( argComputerMove == 'kamień' && argPlayerMove == 'papier'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
      printMessage('Ty wygrywasz!');
    } else if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
      printMessage('Ty wygrywasz!');
    } else {
      printMessage('Tym razem przegrywasz :(');
    }
  }
  const computerMove = getMoveName(randomNumber);

  const playerMove = getMoveName(playerInput);

  displayResult(computerMove, playerMove);

}


document.getElementById('play-rock').addEventListener('click', function(){
  playGame(1);
});
 

document.getElementById('play-paper').addEventListener('click', function(){
  playGame(2);
});


document.getElementById('play-scissors').addEventListener('click', function(){
  playGame(3);
});
