const Board = require("../src/board")

describe("Given a TicTacToe board", () => {
    describe("When the board is initialised", () => {
        test("Then a new board object is created", () => {
            const board = new Board()
            expect(board).toBeInstanceOf(Board)
        })
    })
})
