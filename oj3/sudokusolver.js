// index -> { row, col }
function i2rc(index) {
    return { row: Math.floor(index / 9), col: index % 9 };
}

// { row, col } -> index
function rc2i(row, col) {
    return row * 9 + col;
}

function getChoices(board, index) {
    let choices = [];
    for (let value = 1; value <= 9; ++value) {
        if (acceptable(board, index, value)) {
            choices.push(value);
        }
    }
    return choices;
}

function acceptable(board, index, value) {
    let { row, col } = i2rc(index);

    // if already present on the column, not acceptable
    for (let r = 0; r < 9; ++r)
        if (board[rc2i(r, col)] == value) return false;

    // if already present on the row, not acceptable
    for (let c = 0; c < 9; ++c)
        if (board[rc2i(row, c)] == value) return false;

    // if already present in the same 3x3 square, also not acceptable
    let r1 = Math.floor(row / 3) * 3;
    let c1 = Math.floor(col / 3) * 3;
    for (let r = r1; r < r1 + 3; ++r) {
        for (let c = c1; c < c1 + 3; ++c) {
            if (board[rc2i(r, c)] == value) return false;
        }
    }

    // we have a "go"
    return true;
}