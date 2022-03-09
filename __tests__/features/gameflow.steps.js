/* eslint-disable new-cap */
const { Given, When, Then, Fusion } = require("jest-cucumber-fusion")

let game

Given("a new TicTacToe game", () => {
    game = new Game()
})

When("the game starts", () => {
    game.play()
})

Then("the Game Board Creation phase is printed", () => {
    const gameBoardCreationPhase = [
        "Game Board Creation…",
        " | | ",
        "-+-+-",
        " | | ",
        "-+-+-",
        " | | ",
        "Board Created.",
        "The game will start with player X",
    ].join("\n")
    expect(game.result()).toEqual(gameBoardCreationPhase)
})

Fusion("GameFlow.feature")
