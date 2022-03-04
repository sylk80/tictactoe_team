[![Build Status](https://travis-ci.com/sylk80/tictactoe_team.svg?branch=main)](https://travis-ci.com/sylk80/tictactoe_team)[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=alert_status)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=coverage)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=bugs)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=sylk80_tictactoe_team&metric=code_smells)](https://sonarcloud.io/dashboard?id=sylk80_tictactoe_team)

:heavy_check_mark: / :green_circle: - green test
:x: / :red_circle: - failing test
:dart: - goal
:heavy_plus_sign: - items
:hammer_and_pick: - refactor
:warning: - Techdebt

### Description

### Domains

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

### Scenario 1

:radio_button: As a

:arrow_right: I want

:arrow_left: So that

### User acceptance test 1

:heavy_plus_sign: Given

:construction: When

:heavy_exclamation_mark: Then

### Unit tests

### Technical Debts

-   Decrease cyclomatic complexity and improve readability of functions
-   NOTE: setTimeout causes issues with code coverage and testing complexity
-   Split `tictactoekata.js` into separate files to match Domains
-   remove console.log's so only `result` is returned by game
-   Resolve any ESLint and Prettier issues
-   Bug where we presume Round 9 = Draw (this isn't always the case)
-   Improve readability of win conditions (e.g. constants, etc)
