const ROW_DIVIDER = "-+-+-"
const CELL_DIVIDER = "|"
const EMPTY_CELL = " "

class Board {
    constructor() {
        this.board = [
            [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
            [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
            [EMPTY_CELL, EMPTY_CELL, EMPTY_CELL],
        ]
    }

    placeMark([row, column], mark) {
        this.board[row][column] = mark
    }

    getCell(row, column) {
        return this.board[row][column]
    }

    isCellEmpty(row, column) {
        return this.getCell(row, column) === EMPTY_CELL
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
        return drawnTable.join("\n")
    }

    checkForColumnWin(mark) {
        const leftColumnNumber = 0
        const middleColumnNumber = 1

        const leftColumnValues = this.board
            .map((row) => row[leftColumnNumber])
            .join("")

        const middleColumnValues = this.board
            .map((row) => row[middleColumnNumber])
            .join("")

        return (
            leftColumnValues === mark.repeat(3) ||
            middleColumnValues === mark.repeat(3)
        )
    }
}

module.exports = Board
