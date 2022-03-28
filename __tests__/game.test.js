const Game = require("../src/game")
const { mockPlayerMove, POSITIONS } = require("./utils/playermove.mock")

const { FIRST_ROW, SECOND_ROW, FIRST_COLUMN, SECOND_COLUMN } = POSITIONS

describe("Given a TicTacToe game", () => {
    let mathRandomSpy

    let game

    beforeEach(() => {
        mathRandomSpy = jest.spyOn(global.Math, "random")

        game = new Game()
        game.play()
    })

    afterAll(() => {
        mathRandomSpy.mockRestore()
    })

    describe("When a new game starts", () => {
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

        test("Then Player X is the current player", () => {
            game.gameLog = game.gameLog.slice(0, 1)
            expect(game.getCurrentPlayer().mark).toEqual("X")
        })

        test('Then the "The game will start with player X" message is printed', () => {
            expect(initialRound).toContain(
                "The game will start with Player X\n"
            )
        })
    })

    describe("When it is the first round of the game", () => {
        let game

        beforeEach(() => {
            game = new Game()
            mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
            game.play()
        })

        describe("And Player X places their mark on the board", () => {
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

            test("Then the current player is set to Player O", () => {
                game.gameLog = game.gameLog.slice(0, 2)
                expect(game.getCurrentPlayer().mark).toEqual("O")
            })
        })
    })

    describe("When it is the second round of the game", () => {
        let game

        beforeEach(() => {
            game = new Game()
            mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
            mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
            game.play()
        })

        describe("And Player O places their mark on the board", () => {
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

    describe("When it is the last round of the game", () => {
        test("Then the final round of the game is printed", () => {
            const game = new Game()
            // Player X - row 1 column 1
            mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
            // Player O - row 1 column 2🚧
            mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.4)
            // Player X - row 1 column 3🚧
            mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.8)
            // Player O - row 2 column 1
            mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.02)
            // Player X - row 2 column 3
            mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.8)
            // Player O - row 2 column 2
            mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.4)
            // Player X - row 3 column 1
            mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.02)
            // Player O - row 3 column 3
            mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.8)
            // Player X - row 3 column 2
            mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.4)

            game.play()
            const lastRoundBoard = [
                "X|O|X",
                "-+-+-",
                "O|O|X",
                "-+-+-",
                "X|X|O",
                "\n",
            ].join("\n")

            const lastRound = game.result()[9]
            expect(lastRound).toContain(lastRoundBoard)
        })
    })

    describe("When Player X has placed their mark", () => {
        describe("and the X marks fulfil a vertical winning condition", () => {
            test("Then the game is checking the board for a win", () => {
                const game = new Game()

                // Player X - row 1 column 1
                mathRandomSpy
                    .mockReturnValueOnce(0.02)
                    .mockReturnValueOnce(0.02)
                // Player O - row 1 column 2
                mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.4)
                // Player X - row 2 column 1
                mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.02)
                // Player O - row 2 column 2
                mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.4)
                // Player X - row 3 column 1
                mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.02)

                game.play()

                expect(game.checkBoardForWin(game.playerX)).toEqual(true)
            })

            test("Then the PLAYER X WON! message is printed", () => {
                const game = new Game()

                // Player X - row 1 column 1
                mathRandomSpy
                    .mockReturnValueOnce(0.02)
                    .mockReturnValueOnce(0.02)
                // Player O - row 1 column 2
                mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.4)
                // Player X - row 2 column 1
                mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.02)
                // Player O - row 2 column 2
                mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.4)
                // Player X - row 3 column 1
                mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.02)

                game.play()

                const winningRound = game.result()[5]
                expect(winningRound).toContain("PLAYER X WON!")
            })
        })
    })
})
