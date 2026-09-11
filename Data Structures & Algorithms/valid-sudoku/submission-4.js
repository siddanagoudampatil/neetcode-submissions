class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Array(9).fill(0);
        const col = new Array(9).fill(0);
        const sq = new Array(9).fill(0);

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                if (val === ".") {
                    continue;
                }

                const sqKey = Math.floor(r / 3) * 3 + Math.floor(c / 3);
                if ((row[r] & (1 << val)) || (col[c] & (1 << val)) || (sq[sqKey] & (1 << val))) {
                    return false;
                }

                row[r] |= (1 << val);
                col[c] |= (1 << val);
                sq[sqKey] |= (1 << val);
            }
        }

        return true;
    }
}
