## Description

The exercise involves refactoring the yellow belt TicTacToe Kata strictly adhering to an ATDD-BDD/TDD double loop cycle, extending it with an API and CLI layer following Hexagonal Architecture.

## Key

✅ - green test
❌ - failing test
🎯 - goal
➕ - items
🛠 - refactor
⛔️ - Techdebt

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

## User Story 1 - two bots, playing on the same board

As a game observer

I want to see a TicTacToe game play between two BOTs

So that I can see how the state of the game changes each round

### User acceptance test 1.1 - Game Board Creation phase

Given a new TicTacToe game

When the game starts

Then the Game Board Creation phase is printed

#### Unit tests

Then a new board is created

Then the "Game Board Creation..." message is printed

Then the empty board is printed

Then the "Board Created." message is printed

Then the "The game will start with player X" message is printed

#### Tech debt

-   Split `tictactoekata.js` into separate files to match Domains
-   Remove console.log's so only `result` is returned by game
-   Decrease cyclomatic complexity and improve readability of functions
-   Resolve any ESLint and Prettier issues

### User acceptance test 1.2 - First round

Given the first round of a TicTacToe game

When Player X places their mark on the board

Then the first round of the game is printed

#### Unit tests

Then the mark will be added to the board

Then the "Player X:" message is printed

Then the board with the new mark is printed

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Remove setTimeout from `singleStep` function
-   Resolve any ESLint and Prettier issues

### User acceptance test 1.3 - Second round

Given the second round of a TicTacToe game

When Player O places their mark on the board

Then the second round of the game is printed

#### Unit tests

Then the mark will be added to the board

Then the "Player O:" message is printed

Then the board with the new mark is printed

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Resolve any ESLint and Prettier issues

### User acceptance test 1.4 - Game ends with maximum moves

Given the ninth round of a TicTacToe game

When the last Player places their mark on the board

Then the last round of the game is printed

#### Unit tests

Then the game ends

Then an end game message is printed

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Resolve any ESLint and Prettier issues

## User Story 2 - winning conditions

As a game observer

I want to see a TicTacToe game play between two BOTs

So that I can see how the game can be won

### User acceptance test 2.1 - Vertical winning condition

Given Player X has placed their mark

When the X marks fulfil a vertical winning condition

Then the game ends and the results are printed

#### Unit tests

Then Player X has 3 X marks in the first column

Then Player X has 3 X marks in the second column

Then Player X has 3 X marks in the third column

Then the "PLAYER X WON!" message is printed

Then the game ends

#### Tech debt

-   Bug where we presume Round 9 = Draw (this isn't always the case)
-   Decrease cyclomatic complexity and improve readability of functions
-   Improve readability of win conditions (e.g. constants, etc)
-   Resolve any ESLint and Prettier issues

### User acceptance test 2.2 - Horizontal winning condition

Given Player O has placed their mark

When the O marks fulfil a horizontal winning condition

Then the game ends and the results are printed

#### Unit tests

Then Player O has 3 O marks in the first row

Then Player O has 3 O marks in the second row

Then Player O has 3 O marks in the third row

Then the "PLAYER O WON!" message is printed

Then the game ends

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Improve readability of win conditions (e.g. constants, etc)
-   Resolve any ESLint and Prettier issues

### User acceptance test 2.3 - Diagonal winning condition

Given Player X has placed their mark

When the X marks fulfil a diagonal winning condition

Then the game ends and the results are printed

#### Unit tests

Then Player X has 3 X marks diagonally from top-left to bottom-right

Then Player X has 3 X marks diagonally from top-right to bottom-left

Then the "PLAYER X WON!" message is printed

Then the game ends

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Improve readability of win conditions (e.g. constants, etc)
-   Resolve any ESLint and Prettier issues

## User Story 3 - draw condition

As a game observer

I want to see a TicTacToe game play between two BOTs

So that I can see how the game can end with a draw

### User acceptance test 3.1 - Game ends with a draw

Given a mark is placed in the ninth round

When none of the marks fulfil a winning condition

Then the game ends and the results are printed

#### Unit tests

Then the "GAME ENDS WITH A DRAW!" message is printed

Then the game ends

#### Tech debt

-   Decrease cyclomatic complexity and improve readability of functions
-   Resolve any ESLint and Prettier issues
