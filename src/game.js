const Board = require("./board")

class Game {
    constructor() {
        this.board = new Board()
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
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
