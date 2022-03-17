class Player {
    constructor(mark) {
        this.mark = mark
    }

    placeMarkOnTheBoard(board) {
        // let stepPlaced = 0
        // while(stepPlaced < 1) {
        const row = Math.floor(Math.random() * 3)
        const column = Math.floor(Math.random() * 3)
        //   if(table[newY][newX] === " ") {
        // board.board[column][row] = this.mark
        board.placeMark([row, column], this.mark)
        //       stepPlaced++
        //  }
        // }
        return board
    }
}

module.exports = Player
