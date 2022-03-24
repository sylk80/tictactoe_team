Feature: Winning Conditions

    As a game observer
    I want to see a TicTacToe game play between two BOTs
    So that I can see how the game can be won

Scenario: Vertical winning condition
  Given Player X has placed their mark
  When the X marks fulfil a vertical winning condition
  Then the game ends and the results are printed
