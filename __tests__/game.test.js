const Game = require("../src/game")

describe("Given a new TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
    })

    describe("When the game starts", () => {
        test("Then a new board is created", () => {
            expect(game.board).toBeDefined()
        })

        test('Then the "Game Board Creation..." message is printed', () => {
            game.play()
            expect(game.result()[0]).toContain("Game Board Creation...")
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
            game.play()
            expect(game.result()[0]).toContain(emptyBoard)
        })
    })
})
