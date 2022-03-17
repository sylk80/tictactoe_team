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

    describe("When a mark is placed on the boad", () => {
        test("Then the board should contain that mark", () => {
            const mark = "X"
            const coordinates = [0, 1]
            const [row, column] = coordinates
            board.placeMark(coordinates, mark)
            expect(board.board[row][column]).toEqual(mark)
        })
    })
})
