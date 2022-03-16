# Pomodoro 3

-   Implement `eslint-disable new-cap` for step files globally
-   add "jest-formatting" and "jest" to .eslintrc plugins
-   move jest config to jest.config.js and clean up "testMatch" property


# Pomodoro 6

-   use test.each instead of separate test

# Pomodoro 7

-   use test.each instead of separate test in `game.test.js`
-   use `Before` in BDD tests to initialise `Game()`
-   mocking of Math.random used in both BDD and Unit tests (could be made reusable)
-   make Math.random mock values constants

# Pomodoro 8

- Create Player class to display player name in message
- Refactor game.test relocate board test from game test
- Refactor board mark placing - create method for it in board


# Pomodoro 10

- GameFlowStep has to be refactored
- Gameflow.step - refactor - new game in beforeEach
- Split features?
- Add unit test to cover game random mechanism trying to place a mark in an occupied cell

