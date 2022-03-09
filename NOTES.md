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

# Tech debt

-   Implement `eslint-disable new-cap` for step files globally
-   add "jest-formatting" and "jest" to .eslintrc plugins
-   move jest config to jest.config.js and clean up "testMatch" property

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
-   ✅ Commit rector
