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

let mathRandomSpy

let game

Before(() => {
    mathRandomSpy = jest.spyOn(global.Math, "random")
})

Given("Player X has placed their mark", () => {
    game = new Game()
})

When("the X marks fulfil a vertical winning condition", () => {
    // Player X - row 1 column 1
    mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
    // Player O - row 1 column 2
    mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.4)
    // Player X - row 2 column 1
    mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.02)
    // Player O - row 2 column 2
    mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.4)
    // Player X - row 3 column 1
    mathRandomSpy.mockReturnValueOnce(0.8).mockReturnValueOnce(0.02)

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
          "X| | ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player O:",
          "X|O| ",
          "-+-+-",
          "X|O| ",
          "-+-+-",
          " | | ",
          "\n"
        ].join("\n"),
        [
          "Player X:",
          "X|O| ",
          "-+-+-",
          "X|O| ",
          "-+-+-",
          "X| | ",
          "\n"
        ].join("\n"),
        "\n",
        "PLAYER X WON!"
    ]

    expect(game.result()).toEqual(gameResults)
})

After(() => {
    mathRandomSpy.mockRestore()
})

Fusion("WinningConditions.feature")
