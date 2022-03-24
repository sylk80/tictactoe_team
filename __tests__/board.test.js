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

    describe("When a mark is placed on the board", () => {
        const mark = "X"
        const coordinates = [0, 1]
        const [row, column] = coordinates

        beforeEach(() => {
            board.placeMark(coordinates, mark)
        })

        test("Then the board should contain that mark", () => {
            expect(board.board[row][column]).toEqual(mark)
        })

        test("Then the board indicates that the cell is not empty", () => {
            expect(board.isCellEmpty(row, column)).toEqual(false)
        })
    })

    describe("When the board checks for a winning condition", () => {
        describe("And there are three of the same mark in the left column", () => {
            test("Then the board indicates that mark has won", () => {
                const mark = "X"
                board.placeMark([0, 0], mark)
                board.placeMark([1, 0], mark)
                board.placeMark([2, 0], mark)

                expect(board.checkForColumnWin(mark)).toEqual(true)
            })
        })

        describe("And there are three of the same mark in the middle column", () => {
            test("Then the board indicates that mark has won", () => {
                const mark = "X"
                board.placeMark([0, 1], mark)
                board.placeMark([1, 1], mark)
                board.placeMark([2, 1], mark)

                expect(board.checkForColumnWin(mark)).toEqual(true)
            })
        })

        describe("And there are three of the same mark in the right column", () => {
            test("Then the board indicates that mark has won", () => {
                const mark = "X"
                board.placeMark([0, 2], mark)
                board.placeMark([1, 2], mark)
                board.placeMark([2, 2], mark)

                expect(board.checkForColumnWin(mark)).toEqual(true)
            })
        })
    })
})
