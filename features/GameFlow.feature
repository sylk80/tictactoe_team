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

Scenario: Second Round
  Given the second round of a TicTacToe game
  When Player O places their mark on the board
  Then the second round of the game is printed

Scenario: Last Round
  Given the ninth round of a TicTacToe game
  When the last Player places their mark on the board
  Then the last round of the game is printed
