const Game = require("../src/game")

describe("Given a new TicTacToe game", () => {
    describe("When the game starts", () => {
        test("Then a new board is created", () => {
            const game = new Game()
            expect(game.board).toBeDefined()
        })
    })
})
