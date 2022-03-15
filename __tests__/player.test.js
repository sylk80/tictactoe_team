const Player = require("../src/player")

describe("Given a TicTacToe player", () => {
    describe("When the player is initialised", () => {
        test("Then a new player object is created", () => {
            const player = new Player()
            expect(player).toBeInstanceOf(Player)
        })
    })
})
