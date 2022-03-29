/* eslint-disable new-cap */
const {
    Given,
    When,
    Then,
    Fusion,
    Before,
    After,
} = require("jest-cucumber-fusion")
const Game = require("../src/game")

const {
    mockPlayerMove,
    POSITIONS,
} = require("../__tests__/utils/playermove.mock")

const {
    FIRST_ROW,
    SECOND_ROW,
    FIRST_COLUMN,
    SECOND_COLUMN,
    THIRD_ROW,
    THIRD_COLUMN,
} = POSITIONS

let mathRandomSpy

let game

Before(() => {
    mathRandomSpy = jest.spyOn(global.Math, "random")
})

Given("a new TicTacToe game", () => {
    game = new Game()
})

When("the game starts", () => {
    game.play()
})

Then("the Game Board Creation phase is printed", () => {
    const gameBoardCreationPhase = [
        "Game Board Creation...",
        " | | ",
        "-+-+-",
        " | | ",
        "-+-+-",
        " | | \n",
        "Board Created.",
        "The game will start with Player X\n",
    ].join("\n")
    expect(game.result()[0]).toEqual(gameBoardCreationPhase)
})

Given("the first round of a TicTacToe game", () => {
    game = new Game()
})

When("Player X places their mark on the board", () => {
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
    game.play()
})

Then("the first round of the game is printed", () => {
    const firstRound = [
        "Player X:",
        "X| | ",
        "-+-+-",
        " | | ",
        "-+-+-",
        " | | ",
        "\n",
    ].join("\n")
    expect(game.result()[1]).toEqual(firstRound)
})

Given("the second round of a TicTacToe game", () => {
    game = new Game()
})

When("Player O places their mark on the board", () => {
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
    mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
    game.play()
})

Then("the second round of the game is printed", () => {
    const secondRound = [
        "Player O:",
        "X| | ",
        "-+-+-",
        " |O| ",
        "-+-+-",
        " | | ",
        "\n",
    ].join("\n")
    expect(game.result()[2]).toEqual(secondRound)
})

Given("the ninth round of a TicTacToe game", () => {
    game = new Game()
})

When("the last Player places their mark on the board", () => {
    // Player X
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, SECOND_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, THIRD_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [SECOND_ROW, FIRST_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [SECOND_ROW, THIRD_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [THIRD_ROW, FIRST_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [THIRD_ROW, THIRD_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [THIRD_ROW, SECOND_COLUMN])

    game.play()
})

Then("the last round of the game is printed", () => {
    const lastRound = [
        "Player X:",
        "X|O|X",
        "-+-+-",
        "O|O|X",
        "-+-+-",
        "X|X|O",
        "\n",
    ].join("\n")
    expect(game.result()[9]).toEqual(lastRound)
})

After(() => {
    mathRandomSpy.mockRestore()
})

Fusion("GameFlow.feature")
