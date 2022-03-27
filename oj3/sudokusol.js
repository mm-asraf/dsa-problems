const getSquare = (i, j) => {
    let row = Math.floor(i / 3); // 1-3
    let col = Math.floor(j / 3);
    
    return row * 3 + col;
};

const rowContains = (board, row, val) => {
    return board[row].includes(val);
};

const colContains = (board, col, val) => {
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === val) return true;
    }

    return false;
};

const squareContains = (board, square, val) => {
    const minCol = (square % 3) * 3;
    const minRow = Math.floor(square / 3) * 3;
    
    for (let i = minRow; i < minRow + 3; i++) {
        for (let j = minCol; j < minCol + 3; j++) {
            if (board[i][j] === val) return true;
        }
    }

    return false;
};


const isValid = (board, i, j, val) => {
    if (i < 0 || i > 8 || j < 0 || j > 8) return false;
    
    if (rowContains(board, i, val)) return false;
    if (colContains(board, j, val)) return false;
    if (squareContains(board, getSquare(i, j), val)) return false;
    
    return true;
};

const getNextPos = (i, j) => {
    if (j >= 8) return [i + 1, 0];
    else return [i, j + 1];
};

const fillPosition = (board, row, col) => {
    if (row > 8) return true;
    
    if (board[row][col] !== '.') {
        const next = getNextPos(row, col);
        return fillPosition(board, next[0], next[1]);
    }
    
    for (let i = 1; i <= 9; i++) {
        const val = i.toString();
        if (isValid(board, row, col, val)) {
            board[row][col] = val;
            
            // attempt to move on
            const next = getNextPos(row, col);
            if (fillPosition(board, next[0], next[1])) {
                return true;
            } else {
                board[row][col] = '.'; // undo the move
            }
        }
    }
    
    return false;
};


var solveSudoku = function(board) {
    fillPosition(board, 0, 0);
};