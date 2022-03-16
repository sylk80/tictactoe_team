class Board {
    constructor() {
        // eslint-disable-next-line prettier/prettier
        this.board = [
            [" ", " ", " "],
            [" ", " ", " "],
            [" ", " ", " "],
            ["\n"],
        ]
    }

    // eslint-disable-next-line complexity
    drawTable(table) {
        const drawnTable = []
        let tableRow
        for (let indexY = 0; indexY < 3; indexY++) {
            tableRow = ""
            for (let indexX = 0; indexX < 3; indexX++) {
                tableRow += table[indexY][indexX]
                if (indexX < 2) {
                    tableRow += "|"
                }
            }
            drawnTable.push(tableRow)
            tableRow = ""
            if (indexY < 2) {
                drawnTable.push("-+-+-")
            }
        }
        drawnTable.push("\n")
        return drawnTable
    }

    print() {
        return this.drawTable(this.board)
    }
}

module.exports = Board
