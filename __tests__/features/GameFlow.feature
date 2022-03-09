Feature: Game Flow

    Two bots, playing on the same board

Scenario: Game Board Creation Phase
  Given a new TicTacToe game
  When the game starts
  Then the Game Board Creation phase is printed
