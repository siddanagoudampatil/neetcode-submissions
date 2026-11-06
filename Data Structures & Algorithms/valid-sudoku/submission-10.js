class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = Array.from({ length: 9 }, () => new Set());
        const col = Array.from({ length: 9 }, () => new Set());
        const square = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                if (board[r][c] === '.') {
                    continue;
                }

                const val = board[r][c];
                const sqIdx = 3 * Math.floor(r / 3) + Math.floor(c / 3);
                if (row[r].has(val) || col[c].has(val) || square[sqIdx].has(val)) {
                    return false;
                }
                row[r].add(val);
                col[c].add(val);
                square[sqIdx].add(val);
            }
        }

        return true;
    }
}
