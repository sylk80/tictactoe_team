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

    checkForColumnWin(mark, column) {
        const columnValues = this.board.map((row) => row[column]).join("")

        const winCondition = mark.repeat(3)

        return columnValues === winCondition
    }

    checkForRowWin(mark, row) {
        const rowValues = this.board[row].join("")

        const winCondition = mark.repeat(3)

        return rowValues === winCondition
    }

    checkForVerticalWin(mark) {
        let markHasWon = false
        for (let column = 0; column < 3; column++) {
            markHasWon = this.checkForColumnWin(mark, column)
            if (markHasWon) {
                break
            }
        }
        return markHasWon
    }

    checkForHorizontalWin(mark) {
        let markHasWon = false
        for (let row = 0; row < 3; row++) {
            markHasWon = this.checkForRowWin(mark, row)
            if (markHasWon) {
                break
            }
        }
        return markHasWon
    }

    checkForDiagonalWin(mark) {
        const topLeftToBottomRight =
            this.board[0][0] + this.board[1][1] + this.board[1][1]
        const winCondition = mark.repeat(3)

        return topLeftToBottomRight === winCondition
    }
}

module.exports = Board
