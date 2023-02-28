let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  if(argMoveId == 2){
    return 'papier';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }

  if(argMoveId == 3){
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
  } else {
    printMessage('Tym razem przegrywasz :(');
  }

  if( argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }

  if( argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
  } else {
    printMessage('Tym razem przegrywasz :(');
  }
}

let computerMove = getMoveName(randomNumber);
/*
if(randomNumber == 1){
  computerMove = 'kamień';
}

if(randomNumber == 2){
  computerMove = 'papier';
}

if(randomNumber == 3){
  computerMove = 'nożyce';
}

printMessage('Mój ruch to: ' + computerMove);




let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput); */

let playerMove = = getMoveName(randomNumber);

/*
if(playerInput == '1'){
  playerMove = 'kamień';
}

if(playerInput == '2'){
  playerMove = 'papier';
}

if(playerInput == '1'){
  playerMove = 'nożyce';
}

printMessage('Twój ruch to: ' + playerMove); 



if( computerMove == 'kamień' && playerMove == 'papier'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'kamień' && playerMove == 'nożyce'){
  printMessage('Komputer wygrał!');
}

if( computerMove == 'kamień' && playerMove == 'kamień'){
  printMessage('Remis!');
}

if( computerMove == 'papier' && playerMove == 'papier'){
  printMessage('Remis!');
}

if( computerMove == 'papier' && playerMove == 'kamień'){
  printMessage('Komputer wygrywa!');
}

if( computerMove == 'papier' && playerMove == 'nożyce'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'nożyce' && playerMove == 'kamień'){
  printMessage('Ty wygrywasz!');
}

if( computerMove == 'nożyce' && playerMove == 'papier'){
  printMessage('Komputerr wygrywa!');
}

if( computerMove == 'nożyce' && playerMove == 'nożyce'){
  printMessage('Remis!');
}

if( computerMove == 'nożyce' && playerMove == ''){
  printMessage('nieznany ruch!');
}

if( computerMove == 'kamień' && playerMove == ''){
  printMessage('nieznany ruch!');
}

if( computerMove == 'papier' && playerMove == ''){
  printMessage('nieznany ruch!');
}

/*