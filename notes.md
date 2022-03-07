[![Build Status](https://travis-ci.com/sylk80/tictactoe_team.svg?branch=main)](https://travis-ci.com/sylk80/tictactoe_team)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=alert_status)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=coverage)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=bugs)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=code_smells)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)

:heavy_check_mark: / :green_circle: - green test
:x: / :red_circle: - failing test
:dart: - goal
:heavy_plus_sign: - items
:hammer_and_pick: - refactor
:warning: - Techdebt

## Description

## Domains

-   There is a game
-   There is a board
-   There are players
-   The game has two players
-   The board is made up of cells
-   The board is 3x3 (3 columns and 3 rows)
-   The board is empty at the start of the game
-   At the start of the game, the game board creation phase is printed
-   The game is divided into rounds
-   one player places their mark on the board each round
-   A message of which player is taking their turn is printed each round
-   The players alternate who takes a turn each round
-   One player has an "X" mark, the other player has an "O" mark
-   Player X always goes first
-   The players can only place marks on cells that are not marked
-   A player wins when they have 3 marks in the same row, column or diagonally
-   The game is a draw if all cells of the board are marked and no player has won
-   At the end of each round, the game checks if there is a win or draw condition
-   The game ends when there is a winner or there is a draw
-   The state of each round is made available at the end of the game
-   At the end of the game, the game prints a message with the player that has won

## Scenario 1 - two bots, playing on the same board

:radio_button: As a game observer

:arrow_right: I want to see a TicTacToe game play between two BOTs

:arrow_left: So that I can see how the state of the game changes each round

### User acceptance test 1.1 - Game Board Creation phase

:heavy_plus_sign: Given a new TicTacToe game

:construction: When the game starts

(:heavy_exclamation_mark: Then the Game Board Creation phase is printed)

:heavy_exclamation_mark: Then a new board is created

:heavy_exclamation_mark: Then the "Game Board Creation..." message is printed

:heavy_exclamation_mark: Then the empty board is printed

:heavy_exclamation_mark: Then the "Board Created." message is printed

:heavy_exclamation_mark: Then the "The game will start with player X" message is printed

### User acceptance test 1.2 - First round

:heavy_plus_sign: Given the first round of a TicTacToe game

:construction: When Player X places their mark on the board

:heavy_exclamation_mark: Then the mark will be added to the board

:heavy_exclamation_mark: Then the "Player X:" message is printed

:heavy_exclamation_mark: Then the board with the new mark is printed

### User acceptance test 1.3 - Second round

:heavy_plus_sign: Given the second round of a TicTacToe game

:construction: When Player O places their mark on the board

:heavy_exclamation_mark: Then the mark will be added to the board

:heavy_exclamation_mark: Then the "Player O:" message is printed

:heavy_exclamation_mark: Then the board with the new mark is printed

### User acceptance test 1.4 - Game ends with maximum moves

:heavy_plus_sign: Given the ninth round of a TicTacToe game

:construction: When the last Player places their mark on the board

:heavy_exclamation_mark: Then the game ends

:heavy_exclamation_mark: Then an end game message is printed

## Scenario 2 - winning conditions

:radio_button: As a game observer

:arrow_right: I want to see a TicTacToe game play between two BOTs

:arrow_left: So that I can see how the game can be won

### User acceptance test 2.1 - Vertical winning condition

:heavy_plus_sign: Given Player X has won the game

:construction: When we check the board for a winning condition

:heavy_exclamation_mark: Then Player X has 3 X marks in the first column

:heavy_exclamation_mark: Then Player X has 3 X marks in the second column

:heavy_exclamation_mark: Then Player X has 3 X marks in the third column

:heavy_exclamation_mark: Then the "PLAYER X WON!" message is printed

:heavy_exclamation_mark: Then the game ends

### User acceptance test 2.2 - Horizontal winning condition

:heavy_plus_sign: Given Player O has won the game

:construction: When we check the board for a winning condition

:heavy_exclamation_mark: Then Player O has 3 O marks in the first row

:heavy_exclamation_mark: Then Player O has 3 O marks in the second row

:heavy_exclamation_mark: Then Player O has 3 O marks in the third row

:heavy_exclamation_mark: Then the "PLAYER O WON!" message is printed

:heavy_exclamation_mark: Then the game ends

### User acceptance test 2.3 - Diagonal winning condition

:heavy_plus_sign: Given Player X has won the game

:construction: When we check the board for a winning condition

:heavy_exclamation_mark: Then Player X has 3 X marks diagonally from top-left to bottom-right

:heavy_exclamation_mark: Then Player X has 3 X marks diagonally from top-right to bottom-left

:heavy_exclamation_mark: Then the "PLAYER X WON!" message is printed

:heavy_exclamation_mark: Then the game ends

## Scenario 3 - draw condition

:radio_button: As a game observer

:arrow_right: I want to see a TicTacToe game play between two BOTs

:arrow_left: So that I can see how the game can end with a draw

### User acceptance test 3.1 - Game ends with a draw

:heavy_plus_sign: Given the game is finished

:construction: When we check the board for a winning condition

:construction: And no Player has won

:heavy_exclamation_mark: Then the "GAME ENDS WITH A DRAW!" message is printed

### Unit tests

### Technical Debts

-   Decrease cyclomatic complexity and improve readability of functions
-   NOTE: setTimeout causes issues with code coverage and testing complexity
-   Split `tictactoekata.js` into separate files to match Domains
-   remove console.log's so only `result` is returned by game
-   Resolve any ESLint and Prettier issues
-   Bug where we presume Round 9 = Draw (this isn't always the case)
-   Improve readability of win conditions (e.g. constants, etc)
