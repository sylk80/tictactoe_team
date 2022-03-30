Feature: Horizontal Winning Condition

    As a game observer
    I want to see a TicTacToe game play between two BOTs
    So that I can see how the game can be won

Scenario: Horizontal winning condition
  Given Player O has placed their mark
  When the O marks fulfil a horizontal winning condition
  Then the game ends and the results are printed
