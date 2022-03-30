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

Given("Player X has placed their mark", () => {
    game = new Game()
})

When("the X marks fulfil a diagonal winning condition", () => {
    // Player X
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, FIRST_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, SECOND_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [SECOND_ROW, SECOND_COLUMN])
    // Player O
    mockPlayerMove(mathRandomSpy, [FIRST_ROW, THIRD_COLUMN])
    // Player X
    mockPlayerMove(mathRandomSpy, [THIRD_ROW, THIRD_COLUMN])

    game.play()
})

Then("the game ends and the results are printed", () => {
    // prettier-ignore
    const gameResults = [
        [
          "Game Board Creation...",
          " | | ",
          "-+-+-",
          " | | ",
          "-+-+-",
          " | | \n",
          "Board Created.",
          "The game will start with Player X\n",
        ].join("\n"),
        [
          "Player X:",
          "X| | ",
          "-+-+-",
          " | | ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player O:",
          "X|O| ",
          "-+-+-",
          " | | ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player X:",
          "X|O| ",
          "-+-+-",
          " |X| ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player O:",
          "X|O|O",
          "-+-+-",
          " |X| ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player X:",
          "X|O|O",
          "-+-+-",
          " |X| ",
          "-+-+-",
          " | |X",
          "\n"
        ].join("\n").concat(["PLAYER X WON!"])
    ]

    expect(game.result()).toEqual(gameResults)
})

After(() => {
    mathRandomSpy.mockRestore()
})

Fusion("DiagonalWinningCondition.feature")
