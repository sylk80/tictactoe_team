const Board = require("./board")
const Player = require("./player")

class Game {
    constructor() {
        this.board = new Board()
        this.playerX = new Player("X")
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
        const newX = Math.floor(Math.random() * 3)
        const newY = Math.floor(Math.random() * 3)
        this.board.board[newY][newX] = this.playerX.mark
        const round = this.gameStep(this.playerX)
        this.gameLog.push(round)
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
