# Pomodoro 1

Driver: Julian
Navigator: Szilvia

-   Setup Jest Cucumber
    -   ✅ create subfolder for BDD tests, under **tests**
    -   ✅ Add feature file
    -   ✅ Add UAT 1.1 to feature file
    -   ✅ install jest-cucumber
    -   add script to package.json to run BDD tests
    -   ✅ create step definition file
    -   Add steps to step definition

### User acceptance test 1.1 - Game Board Creation phase

Given a new TicTacToe game

When the game starts

Then the Game Board Creation phase is printed

```
Game Board Creation…
 | |
-+-+-
 | |
-+-+-
 | |
Board Created.
The game will start with player X
```

# Pomodoro 2

Driver: Julian
Navigator: Szilvia

-   ✅ replace jest-cucumber with jest-cucumber-fusion
-   ✅ add script to package.json to run BDD tests
-   ✅ Add steps to step definition
-   Populate UAT 1.1 steps

# Pomodoro 3

Driver: Julian
Navigator: Szilvia

-   ✅ Fix eslint expect error
-   ✅ Run bdd test and commit
-   ✅ tech debt: create .nvmrc file and set to node 16.14.0
-   🚧 create `game.test.js` and write unit test:
    -   "Then a new board is created"
-   🚨 Split `tictactoekata.js` into separate files to match Domains
-   ✅ tech debt: delete tictactoe_team.js and tictactoe_team_test.js

# Pomodoro 4

Driver: Julian
Navigator: Szilvia

-   ✅ Create unit test script
-   ✅ Run unit test red phase and commit
-   ✅ Create game.js file
-   ✅ Initalize board
-   ✅ Run unit test green phase and commit
-   ✅ Create board.test.js
-   ✅ Run unit test red phase and commit
-   ✅ Create Board component
-   ✅ Run unit test green phase and commit
-   ✅ Refactor board component
-   ✅ Commit refactor

# Pomodoro 5

Driver: Julian
Navigator: Szilvia

-   ✅ Create unit test - "Game Board Creation..." message
-   ✅ Run unit test red phase and commit
-   ✅ Decide where to put message - game.js
-   ✅ Modify code of origin
-   ✅ Run unit test green phase and commit
-   ✅ Refactor code - test refactor Game object creation
-   ✅ Run unit test green phase and commit
-   ✅ Create unit test - empty game board printing
-   ✅ Run unit test red phase and commit

# Pomodoro 6

Driver: Julian
Navigator: Szilvia

-   ✅ Modify code of origin
-   ✅ Run unit test green phase and commit, new lines
-   ✅ Refactor code - test code - game.play
-   ✅ Run unit test green phase and commit
-   ✅ Create unit test - "Board Created." message
-   ✅ Run unit test red phase and commit
-   ✅ Modify code of origin
-   ✅ Run unit test green phase and commit
-   ✅ Refactor code - test - initial round
-   ✅ Run unit test green phase and commit
-   ✅ Create unit test - "Board Created." message
-   ✅ Run unit test red phase and commit
-   ✅ Modify code of origin
-   ✅ Run unit test green phase and commit
-                                                           Refactor code

# Pomodoro 7

Driver: Julian
Navigator: Balazs

-   ✅ fix UAT 1.1 BDD test so that it passes
-   ✅ implement UAT 1.2 BDD test - red
-   unit tests:
    -   Then the mark will be added to the board
    -   Then the "Player X:" message is printed
    -   Then the board with the new mark is printed

### User acceptance test 1.2 - First round

Given the first round of a TicTacToe game

When Player X places their mark on the board

Then the first round of the game is printed

# Pomodoro 8

Driver: Julian
Navigator: Szilvia, Balázs

-   ✅ Create unit test - "Player X:" message is printed
-   ✅ Run unit test red phase
-   ✅ modify code of origin
-   ✅ Run unit test green phase
-   ✅ Refactor code - create Player class - for message as well
-   ✅ Make game test fail with player class
-   ✅ Create unit test for player class
-   ✅ Run unit test for player phase red
-   ✅ Modify logic in player class
-   ✅ Run unit test for player phase green
-   ✅ Create unit test for player mark
-   ✅ Run unit test for player mark phase red
-   ✅ Modify logic in player class
-   ✅ Run unit test for player mark phase green
-   ✅ Modify game to use player class
-   ✅ Run unit test for full refactor phase green
-   ✅ Create unit test - board with the new mark is printed
-   ✅ Run unit test red phase
-   ✅ Modify code of origin
-   ✅ Run unit test green phase
-   Refactor

# Pomodoro 9

Driver: Szilvia
Navigator: Balazs

-   ✅ Write unit test for board printing
-   ✅ Run unit test red phase
-   ✅ Add printing to board class
-
-   ✅ Refactor board test to use before each
-   Refactor player class - create live round logic

# Pomodoro 10

Driver: Julian
Navigator: Szilvia

-   ✅ Refactor drawtable method
-   ✅ Run unit test phase green
-   ✅ Create 1.3 BDD test
-   ✅ Create feature
-   ✅ Create gameflow.step
-   ✅ Run BDD test phase - red
-   ✅ Create unit test - O mark is added to the board
-   ✅ Run unit test red phase

# Pomodoro 11

Driver: Szilvia
Navigator: Julian

-   🚧 Modify code of origin
    -   ✅ pull across `gameStep` and refactor

# Pomodoro 12

Driver: Julian
Navigator: Balazs

-   🚧 pull across `getNextMarkOnTheTable` and refactor
-   Run unit test green phase
-   Refactor

-   New unit test to check the cell is not empty
