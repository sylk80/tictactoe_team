const Board = require("../src/board")

describe("Given a TicTacToe board", () => {
    let board
    beforeEach(() => {
        board = new Board()
    })
    describe("When the board is initialised", () => {
        test("Then a new board object is created", () => {
            expect(board).toBeInstanceOf(Board)
        })
        test("Then a board printing method is created", () => {
            expect(board.print()).toBeDefined()
        })
    })
})
