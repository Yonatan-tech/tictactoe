
let currentPlayer = "X";
let totalTurns = 0;
let gameEnd = false;

function changePlayer() {
  if (currentPlayer == "X"){
  currentPlayer = "O";
  } else{
    currentPlayer = "X";
  }
}

function playerWins (tile1, tile2, tile3) {
  return ($(tile1).text() == currentPlayer && $(tile2).text() == currentPlayer && $(tile3).text() == currentPlayer)
    
}

function verticalTiles(){
  return playerWins("#tile1", "#tile4", "#tile7") || playerWins("#tile2", "#tile5", "#tile8") || playerWins("#tile3", "#tile6", "#tile9")
}

function horizantalTiles(){
  return playerWins("#tile1", "#tile2", "#tile3") || playerWins("#tile4", "#tile5", "#tile6") || playerWins("#tile7", "#tile8", "#tile9")
}

function digonalTiles(){
  return playerWins("#tile1", "#tile5", "#tile9") || playerWins("#tile3", "#tile5", "#tile7")
}

function numberOfTurns(){
  totalTurns++ 
  console.log(totalTurns);
}

function draw(){
  console.log(numberOfTurns);
  if (totalTurns == 9){
    gameEnd = true;
    $("h1").html("It's a Draw");
    console.log("draw"); 
  }
}

function performLogic(buttonId, tileID) {
  
  $(tileID).html(currentPlayer)
  changePlayer();
  numberOfTurns();
  draw();
}


$("#button1").click(function() {
    performLogic("#button1","#tile1");
});

$("#button2").click(function() {
    performLogic("#button2","#tile2");
});

$("#button3").click(function() {
    performLogic("#button3","#tile3");
});

$("#button4").click(function() {
    performLogic("#button4","#tile4");
});

$("#button5").click(function() {
    performLogic("#button5","#tile5");
});

$("#button6").click(function() {
    performLogic("#button6","#tile6");
});

$("#button7").click(function() {
    performLogic("#button7","#tile7");
});

$("#button8").click(function() {
    performLogic("#button8","#tile8");
});

$("#button9").click(function() {
    performLogic("#button9","#tile9");
});

