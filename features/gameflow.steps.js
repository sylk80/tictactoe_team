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

Fusion("GameFlow.feature")
