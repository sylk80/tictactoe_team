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
        setupMessage += [
            " | | ",
            "-+-+-",
            " | | ",
            "-+-+-",
            " | | ",
            "\n",
        ].join("\n")
        setupMessage += "Board Created.\n"
        setupMessage += "The game will start with Player X\n"
        this.gameLog.push(setupMessage)
    }

    play() {
        this.initializerStep()
        const newX = Math.floor(Math.random() * 3)
        const newY = Math.floor(Math.random() * 3)
        this.board.board[newY][newX] = this.playerX.mark
        this.gameLog.push(`Player ${this.playerX.mark}:`)
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
