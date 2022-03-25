const Board = require("./board")
const Player = require("./player")

const isEven = (length) => length % 2 === 0

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

    checkBoardForWin(player) {
        return this.board.checkForVerticalWin(player.mark)
    }

    gameStep(player) {
        let result = `Player ${player.mark}:\n`
        result += this.board.print()
        return result
    }

    getCurrentPlayer() {
        return isEven(this.gameLog.length) ? this.playerO : this.playerX
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
