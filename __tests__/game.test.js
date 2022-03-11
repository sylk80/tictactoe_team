const Game = require("../src/game")

describe("Given a new TicTacToe game", () => {
    describe("When the game starts", () => {
        test("Then a new board is created", () => {
            const game = new Game()
            expect(game.board).toBeDefined()
        })

        test('Then the "Game Board Creation..." message is printed', () => {
            const game = new Game()
            game.play()
            expect(game.result()[0]).toContain("Game Board Creation…")
        })
    })
})
