const Game = require("../src/game")

describe("Given a new TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
        game.play()
    })

    describe("When the game starts", () => {
        let initialRound

        beforeEach(() => {
            initialRound = game.result()[0]
        })

        test("Then a new board is created", () => {
            expect(game.board).toBeDefined()
        })

        test('Then the "Game Board Creation..." message is printed', () => {
            expect(initialRound).toContain("Game Board Creation...\n")
        })

        test("Then the empty board is printed", () => {
            const emptyBoard = [
                " | | ",
                "-+-+-",
                " | | ",
                "-+-+-",
                " | | ",
                "\n",
            ].join("\n")
            expect(initialRound).toContain(emptyBoard)
        })

        test('Then the "Board Created." message is printed', () => {
            expect(initialRound).toContain("Board Created.\n")
        })

        test('Then the "The game will start with player X" message is printed', () => {
            expect(initialRound).toContain(
                "The game will start with Player X\n"
            )
        })
    })
})

describe.only("Given the first round of a TicTacToe game", () => {
    const mathRandomSpy = jest.spyOn(global.Math, "random")
    let game

    beforeEach(() => {
        game = new Game()
        game.play()
    })

    describe("When Player X places their mark on the board", () => {
        test("Then the mark will be added to the board", () => {
            mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
            expect(game.board.board[0][0]).toEqual("X")
        })
    })
})
