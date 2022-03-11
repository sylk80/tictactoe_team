const Game = require("../src/game")

describe("Given a new TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
        game.play()
    })

    describe("When the game starts", () => {
        test("Then a new board is created", () => {
            expect(game.board).toBeDefined()
        })

        test('Then the "Game Board Creation..." message is printed', () => {
            expect(game.result()[0]).toContain("Game Board Creation...\n")
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
            expect(game.result()[0]).toContain(emptyBoard)
        })
    })
})
