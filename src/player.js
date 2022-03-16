class Player {
    constructor(mark) {
        this.mark = mark
    }

    placeMarkOnTheBoard(board) {
        // let stepPlaced = 0
        // while(stepPlaced < 1) {
        const newX = Math.floor(Math.random() * 3)
        const newY = Math.floor(Math.random() * 3)
        //   if(table[newY][newX] === " ") {
        board[newY][newX] = this.mark
        //       stepPlaced++
        //  }
        // }
        return board
    }
}

module.exports = Player
