const Board = require("./board")
const Player = require("./player")

const isEven = (length) => length % 2 === 0

class Game {
    constructor() {
        this.board = new Board()
        this.playerX = new Player("X")
        this.playerO = new Player("O")
        this.gameLog = []
        this.winner
    }

    initializerStep() {
        let setupMessage = "Game Board Creation...\n"
        setupMessage += this.board.print()
        setupMessage += "Board Created.\n"
        setupMessage += "The game will start with Player X\n"
        this.gameLog.push(setupMessage)
    }

    checkBoardForWin(player) {
        const winner = this.board.checkForVerticalWin(player.mark)
        if (winner) {
            this.gameLog[
                this.gameLog.length - 1
            ] += `PLAYER ${player.mark} WON!`
            this.winner = player
        }
    }

    gameStep(player) {
        player.placeMarkOnTheBoard(this.board)
        let result = `Player ${player.mark}:\n`
        result += this.board.print()
        this.gameLog.push(result)
    }

    getCurrentPlayer() {
        return isEven(this.gameLog.length) ? this.playerO : this.playerX
    }

    play() {
        this.initializerStep()

        while (this.gameLog.length < 10 && this.winner == null) {
            const currentPlayer = this.getCurrentPlayer()
            this.gameStep(currentPlayer)
            this.checkBoardForWin(currentPlayer)
        }
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
