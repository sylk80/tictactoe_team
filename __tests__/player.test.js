const Player = require("../src/player")
const Board = require("../src/board")
const { mockPlayerMove, POSITIONS } = require("./utils/playermove.mock")

const { FIRST_ROW, SECOND_ROW, FIRST_COLUMN, SECOND_COLUMN } = POSITIONS

let mathRandomSpy

describe("Given a TicTacToe player", () => {
    beforeEach(() => {
        mathRandomSpy = jest.spyOn(global.Math, "random")
    })

    afterAll(() => {
        mathRandomSpy.mockRestore()
    })

    describe("When the player is initialised", () => {
        let player
        const mark = "X"

        beforeEach(() => {
            player = new Player(mark)
        })

        test("Then a new player object is created", () => {
            const player = new Player()
            expect(player).toBeInstanceOf(Player)
        })

        test("Then the player's mark is set", () => {
            expect(player.mark).toEqual(mark)
        })
    })
    describe("When the player is taking their turn", () => {
        let player
        const mark = "X"
        let board

        beforeEach(() => {
            player = new Player(mark)
            board = new Board()
        })

        test("Then a mark is placed on the board", () => {
            mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
            player.placeMarkOnTheBoard(board)
            expect(board.getCell(0, 0)).toEqual(player.mark)
        })

        describe("And the cell is not empty", () => {
            beforeEach(() => {
                board.board[0][0] = "O"
            })

            test("Then the original mark is kept in the cell", () => {
                mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
                player.placeMarkOnTheBoard(board)
                expect(board.getCell(0, 0)).toEqual("O")
            })

            test("Then they place their mark in a different cell on the board", () => {
                mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
                mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
                player.placeMarkOnTheBoard(board)
                expect(board.getCell(1, 1)).toEqual(player.mark)
            })
        })
    })
})
