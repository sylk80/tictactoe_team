Feature: Diagonal Winning Condition

    As a game observer
    I want to see a TicTacToe game play between two BOTs
    So that I can see how the game can be won

Scenario: Diagonal winning condition
  Given Player X has placed their mark
  When the X marks fulfil a diagonal winning condition
  Then the game ends and the results are printed
