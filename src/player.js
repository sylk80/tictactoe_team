class Player {
    constructor(mark) {
        this.mark = mark
    }

    placeMarkOnTheBoard(board) {
        let stepPlaced = 0
        while (stepPlaced < 1) {
            const row = Math.floor(Math.random() * 3)
            const column = Math.floor(Math.random() * 3)
            if (board.isCellEmpty(row, column)) {
                board.placeMark([row, column], this.mark)
                stepPlaced++
            }
        }
    }
}

module.exports = Player
