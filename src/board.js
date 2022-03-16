const ROW_DIVIDER = "-+-+-"
const CELL_DIVIDER = "|"

class Board {
    constructor() {
        this.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
        ]
    }

    getCell(row, column) {
        return this.board[row][column]
    }

    addRowDivider(row, drawnTable) {
        if (row < 2) {
            drawnTable.push(ROW_DIVIDER)
        }
    }

    print() {
        const drawnTable = []
        for (let row = 0; row < 3; row++) {
            drawnTable.push(
                [
                    this.getCell(row, 0),
                    this.getCell(row, 1),
                    this.getCell(row, 2),
                ].join(CELL_DIVIDER)
            )
            this.addRowDivider(row, drawnTable)
        }
        drawnTable.push("\n")
        return drawnTable
    }
}

module.exports = Board
