document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells :[
    {
      row: 0,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 0,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 1,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 1,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 2,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 3,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 0,
      isMine: true,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 4,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 0,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 1,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 2,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 3,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 4,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
    {
      row: 5,
      col: 5,
      isMine: false,
      isMarked: false,
      hidden: true,
    },
  ],
}





function startGame () {



  for (i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i]);


}

    document.querySelector(".board").addEventListener("click", function checkForWin () {

    for (i = 0; i < board.cells.length; i++) {

    if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return;
      } else
      if (board.cells[i].isMine === false && board.cells[i].hidden == true) {
        return;
      }
    }
    lib.displayMessage('You win!');
  } );


    document.querySelector(".board").addEventListener("contextmenu", function checkForWin () {

    for (i = 0; i < board.cells.length; i++) {

    if (board.cells[i].isMine === true && board.cells[i].isMarked === false) {
        return;
      } else
      if (board.cells[i].isMine === false && board.cells[i].hidden == true) {
        return;
      }
    }
    lib.displayMessage('You win!');
  } );




  lib.initBoard()
}



// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?



function countSurroundingMines (cell) {

  var surrounding = lib.getSurroundingCells(cell.row, cell.col);
  var count = 0;
    for (j = 0; j < surrounding.length; j++) {
      if (surrounding[j].isMine == true) {
        count = count + 1;
    }
  }
  return count;
}
