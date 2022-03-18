const FIRST_ROW = 0.02
const SECOND_ROW = 0.4
const FIRST_COLUMN = 0.02
const SECOND_COLUMN = 0.4

const POSITIONS = {
    FIRST_ROW,
    SECOND_ROW,
    FIRST_COLUMN,
    SECOND_COLUMN,
}

const mockPlayerMove = (mathRandomSpy, [row, column]) => {
    mathRandomSpy.mockReturnValueOnce(row).mockReturnValueOnce(column)
}

module.exports = {
    mockPlayerMove,
    POSITIONS,
}
