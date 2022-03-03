const tictactoekata = () => {
  let result = "";
  let table = [[" "," "," "],[" "," "," "],[" "," "," "]];
  for(let roundNumber = 0 ; roundNumber < 10; roundNumber++) {
      let player = nextPlayer(roundNumber);
      table = roundNumber > 0 ? getNextMarkOnTheTable(table, player) : table;
      result += singleStep(roundNumber,table,player);
      let winner = checkForWin(table);
      if(winner !== null) {
          // console.log(result);
          break;
      }
  }
  return result;
};

const nextPlayer = (roundNumber) => {
  return roundNumber % 2 === 0 ? "O" : "X";
}

const drawTable = (table) => {
  let drawnTable = "";
  for(let indexY = 0; indexY < 3; indexY++) {
      for(let indexX = 0; indexX < 3; indexX++) {
        drawnTable += table[indexY][indexX];
        if(indexX < 2) {
            drawnTable += "|";
        } else {
            drawnTable += "\n";
        }
      }
      if(indexY < 2) {
          drawnTable += "-+-+-\n"
      }
  }
  return drawnTable;
}

const singleStep = (roundNumber, table, player) => {
  let singleResult = "";
  if(roundNumber === 0) {
      singleResult += initializerStep(table);
  } else {
      singleResult += gameStep(player,table,roundNumber);
  }
  if(roundNumber === 9) {
      singleResult += "GAME ENDS WITH A DRAW!"
  } else {
      let winner = checkForWin(table);
      if(winner !== null) {
          singleResult += "PLAYER "+ player + " WON!";
      }
  }
  setTimeout(function(){
      // console.log("\nNext round : " + singleResult);
  }, 2000 * roundNumber);
  return singleResult;
}

const initializerStep = (table) => {
  let result = "\n";
  result += "Game board creation...";
  result += "\n";
  result += drawTable(table);
  result += "Board Created.\n"
  result += "The game will start with Player X\n";
  return result;
}

const gameStep = (player, table, roundNumber) => {
  let result = "\n";
  result += "Round " + roundNumber + " : \n";
  result += "Player " + player + " : \n";
  result += drawTable(table);
  result += "\n";
  return result;
}

const getNextMarkOnTheTable = (table, player) => {
  let stepPlaced = 0;
  while(stepPlaced < 1) {
      let newX = Math.floor(Math.random() * 3);
      let newY = Math.floor(Math.random() * 3);
      if(table[newY][newX] === " ") {
          table[newY][newX] = player;
          stepPlaced++;
      }
  }
  return table;
}

const checkForHorizontalWin = (table) => {
  let winner = null;
  for(let row = 0; row < 3; row++) {
      winner = chekRowForWin(row, table);
      if(winner != null) {
          break;
      }
  }
  return winner;
}

const chekRowForWin = (rowNumber, table) => {
  let winner = null;
  if(table[rowNumber][0] === table[rowNumber][1] && table[rowNumber][0] === table[rowNumber][2] && table[rowNumber][1] === table[rowNumber][2] && table[rowNumber][0] !== " " ) {
      winner = table[rowNumber][0];
  }
  return winner;
}

const checkForVerticalWin = (table) => {
  let winner = null;
  for(let column = 0; column < 3; column++) {
      winner = checkForColumnWin(column, table);
      if(winner != null) {
          break;
      }
  }
  return winner;
}

const checkForColumnWin = (columnNumber, table) => {
  let winner = null;
  if(table[0][columnNumber] === table[1][columnNumber] && table[0][columnNumber] === table[2][columnNumber] && table[1][columnNumber] === table[2][columnNumber] && table[0][columnNumber] !== " " ) {
      winner = table[0][columnNumber];
  }
  return winner;
}

const checkForDiagonalWin = (table) => {
  let winner = null;
  if(table[0][0] === table[1][1] && table[0][0] === table[2][2] && table[1][1] === table[2][2] && table[0][0] !== " " ) {
      winner = table[0][0];
  } else if(table[0][2] === table[1][1] && table[0][2] === table[2][0] && table[1][1] === table[2][0] && table[0][2] !== " ") {
      winner = table[0][2];
  }
  return winner;
}

const checkForWin = (table) => {
  let winner = checkForHorizontalWin(table);
  if(winner === null) {
      winner = checkForVerticalWin(table);
      if(winner === null) {
          winner = checkForDiagonalWin(table);
      }
  }
  return winner;
}



module.exports =  { tictactoekata }
