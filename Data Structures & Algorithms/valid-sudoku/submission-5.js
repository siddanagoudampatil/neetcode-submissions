class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let r = 0; r < 9; r++) {
            const set = new Set();
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                if (val === '.') continue;
                if (set.has(val)) {
                    return false;
                }
                set.add(val);
            }
        }

        for (let c = 0; c < 9; c++) {
            const set = new Set();
            for (let r = 0; r < 9; r++) {
                const val = board[r][c];
                if (val === '.') continue;
                if (set.has(val)) {
                    return false;
                }
                set.add(val);
            }
        }

        for (let sq = 0; sq < 9; sq++) {
            const set = new Set();

            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    const row = Math.floor(sq / 3) * 3 + r;
                    const col = (sq % 3) * 3 + c;

                    const val = board[row][col];
                    if (val === '.') continue;
                    if (set.has(val)) {
                        return false;
                    }
                    set.add(val);
                }
            }
        }

        return true;
    }
}
