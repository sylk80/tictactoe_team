const Board = require("./board")

class Game {
    constructor() {
        this.board = new Board()
        this.gameLog = []
    }

    initializerStep() {
        const setupMessage = "Game Board Creation..."
        // result += "\n";
        // result += drawTable(table);
        // result += "Board Created.\n"
        // result += "The game will start with Player X\n";
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
