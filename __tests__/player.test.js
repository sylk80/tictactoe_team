const Player = require("../src/player")

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
})
