class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = {};
        const cols = {};
        const squares = {};

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === ".") {
                    continue;
                }
                const squareKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                if ((rows[r] && rows[r].has(board[r][c])) || (cols[c] && cols[c].has(board[r][c])) || (squares[squareKey] && squares[squareKey].has(board[r][c]))) {
                    return false;
                }
                if (!rows[r]) rows[r] = new Set();
                rows[r].add(board[r][c]);

                if (!cols[c]) cols[c] = new Set();
                cols[c].add(board[r][c]);

                if (!squares[squareKey]) squares[squareKey] = new Set();
                squares[squareKey].add(board[r][c]);
            }
        }

        return true;
    }
}
