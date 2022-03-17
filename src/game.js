const Board = require("./board")
const Player = require("./player")

class Game {
    constructor() {
        this.board = new Board()
        this.playerX = new Player("X")
        this.playerO = new Player("O")
        this.gameLog = []
    }

    initializerStep() {
        let setupMessage = "Game Board Creation...\n"
        setupMessage += this.board.print()
        setupMessage += "Board Created.\n"
        setupMessage += "The game will start with Player X\n"
        this.gameLog.push(setupMessage)
    }

    gameStep(player) {
        let result = `Player ${player.mark}:\n`
        result += this.board.print()
        return result
    }

    play() {
        this.initializerStep()

        this.playerX.placeMarkOnTheBoard(this.board)
        const firstRound = this.gameStep(this.playerX)
        this.gameLog.push(firstRound)

        this.playerO.placeMarkOnTheBoard(this.board)
        // const secondRound = this.gameStep(this.playerO)
        this.gameLog.push(`Player ${this.playerO.mark}:\n`)
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
