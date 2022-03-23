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

    getCurrentPlayer() {
        return this.gameLog.length % 2 === 0 ? this.playerO : this.playerX
    }

    play() {
        this.initializerStep()

        while (this.gameLog.length < 10) {
            const currentPlayer = this.getCurrentPlayer()
            currentPlayer.placeMarkOnTheBoard(this.board)
            const round = this.gameStep(currentPlayer)
            this.gameLog.push(round)
        }
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
