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
    mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
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
    mathRandomSpy.mockReturnValueOnce(0.02).mockReturnValueOnce(0.02)
    mathRandomSpy.mockReturnValueOnce(0.4).mockReturnValueOnce(0.4)
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

After(() => {
    mathRandomSpy.mockRestore()
})

Fusion("GameFlow.feature")
