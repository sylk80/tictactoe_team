/* eslint-disable new-cap */
const { Given, When, Then, Fusion } = require("jest-cucumber-fusion")
const Game = require("../src/game")

let game

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
    const mathRandomSpy = jest.spyOn(global.Math, "random")
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

Fusion("GameFlow.feature")
