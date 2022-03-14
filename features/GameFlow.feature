Feature: Game Flow

    Two bots, playing on the same board

Scenario: Game Board Creation Phase
  Given a new TicTacToe game
  When the game starts
  Then the Game Board Creation phase is printed

Scenario: First Round
  Given the first round of a TicTacToe game
  When Player X places their mark on the board
  Then the first round of the game is printed
