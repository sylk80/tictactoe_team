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
        const secondRound = this.gameStep(this.playerO)
        this.gameLog.push(secondRound)

        this.playerX.placeMarkOnTheBoard(this.board)
        const thirdRound = this.gameStep(this.playerX)
        this.gameLog.push(thirdRound)

        this.playerO.placeMarkOnTheBoard(this.board)
        const fourthRound = this.gameStep(this.playerO)
        this.gameLog.push(fourthRound)

        this.playerX.placeMarkOnTheBoard(this.board)
        const fifthRound = this.gameStep(this.playerX)
        this.gameLog.push(fifthRound)

        this.playerO.placeMarkOnTheBoard(this.board)
        const sixthRound = this.gameStep(this.playerO)
        this.gameLog.push(sixthRound)

        this.playerX.placeMarkOnTheBoard(this.board)
        const seventhRound = this.gameStep(this.playerX)
        this.gameLog.push(seventhRound)

        this.playerO.placeMarkOnTheBoard(this.board)
        const eighthRound = this.gameStep(this.playerO)
        this.gameLog.push(eighthRound)

        this.playerX.placeMarkOnTheBoard(this.board)
        const ninthRound = this.gameStep(this.playerX)
        this.gameLog.push(ninthRound)
    }

    result() {
        return this.gameLog
    }
}

module.exports = Game
