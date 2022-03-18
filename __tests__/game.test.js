const Game = require("../src/game")
const { mockPlayerMove, POSITIONS } = require("./utils/playermove.mock")

const { FIRST_ROW, SECOND_ROW, FIRST_COLUMN, SECOND_COLUMN } = POSITIONS

let mathRandomSpy

beforeEach(() => {
    mathRandomSpy = jest.spyOn(global.Math, "random")
})

afterAll(() => {
    mathRandomSpy.mockRestore()
})

describe("Given a new TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
        game.play()
    })

    describe("When the game starts", () => {
        let initialRound

        beforeEach(() => {
            initialRound = game.result()[0]
        })

        test("Then a new board is created", () => {
            expect(game.board).toBeDefined()
        })

        test('Then the "Game Board Creation..." message is printed', () => {
            expect(initialRound).toContain("Game Board Creation...\n")
        })

        test("Then the empty board is printed", () => {
            const emptyBoard = [
                " | | ",
                "-+-+-",
                " | | ",
                "-+-+-",
                " | | ",
                "\n",
            ].join("\n")
            expect(initialRound).toContain(emptyBoard)
        })

        test('Then the "Board Created." message is printed', () => {
            expect(initialRound).toContain("Board Created.\n")
        })

        test('Then the "The game will start with player X" message is printed', () => {
            expect(initialRound).toContain(
                "The game will start with Player X\n"
            )
        })
    })
})

describe("Given the first round of a TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
        mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
        game.play()
    })

    describe("When Player X places their mark on the board", () => {
        test("Then the mark will be added to the board", () => {
            expect(game.board.board[0][0]).toEqual("X")
        })

        test('Then the "Player X:" message is printed', () => {
            const firstRound = game.result()[1]
            expect(firstRound).toContain("Player X:")
        })

        test("Then the board with the new mark is printed", () => {
            const firstRoundBoard = [
                "X| | ",
                "-+-+-",
                " | | ",
                "-+-+-",
                " | | ",
                "\n",
            ].join("\n")

            const firstRound = game.result()[1]
            expect(firstRound).toContain(firstRoundBoard)
        })
    })
})

describe("Given the second round of a TicTacToe game", () => {
    let game

    beforeEach(() => {
        game = new Game()
        mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
        mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
        game.play()
    })

    describe("When Player O places their mark on the board", () => {
        test("Then the mark will be added to the board", () => {
            expect(game.board.board[1][1]).toEqual("O")
        })

        test('Then the "Player O:" message is printed', () => {
            const secondRound = game.result()[2]
            expect(secondRound).toContain("Player O:")
        })

        test("Then the board with the new mark is printed", () => {
            const secondRoundBoard = [
                "X| | ",
                "-+-+-",
                " |O| ",
                "-+-+-",
                " | | ",
                "\n",
            ].join("\n")

            const secondRound = game.result()[2]
            expect(secondRound).toContain(secondRoundBoard)
        })
    })
})
