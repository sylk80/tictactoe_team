const FIRST_ROW = 0.02
const SECOND_ROW = 0.4
const FIRST_COLUMN = 0.02
const SECOND_COLUMN = 0.4
const THIRD_ROW = 0.8
const THIRD_COLUMN = 0.8

const POSITIONS = {
    FIRST_ROW,
    SECOND_ROW,
    FIRST_COLUMN,
    SECOND_COLUMN,
    THIRD_ROW,
    THIRD_COLUMN,
}

const mockPlayerMove = (mathRandomSpy, [row, column]) => {
    mathRandomSpy.mockReturnValueOnce(row).mockReturnValueOnce(column)
}

module.exports = {
    mockPlayerMove,
    POSITIONS,
}
