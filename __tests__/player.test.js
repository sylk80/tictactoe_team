const Player = require("../src/player")
const Board = require("../src/board")

const mathRandomSpy = jest.spyOn(global.Math, "random")

describe("Given a TicTacToe player", () => {
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

        beforeEach(() => {
            player = new Player(mark)
        })

        test("Then a mark is placed on the board", () => {
            const board = new Board()
            mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
            player.placeMarkOnTheBoard(board)
            expect(board.board[0][0]).toEqual(player.mark)
        })
        describe("And the cell is not empty", () => {
            test("Then the original mark is kept in the cell", () => {
                const board = new Board()
                board.board[0][0] = "O"
                mathRandomSpy
                    .mockReturnValueOnce(0.02)
                    .mockReturnValueOnce(0.02)
                player.placeMarkOnTheBoard(board)
                expect(board.board[0][0]).toEqual("O")
            })
        })
    })
})
