class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const row = new Map();
        const col = new Map();
        const sq = new Map();

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];
                
                if (val === ".") {
                    continue;
                }

                const sqKey = `${Math.floor(r / 3)},${Math.floor(c / 3)}`;
                
                if (
                    (row.get(r) && row.get(r).has(val)) ||
                    (col.get(c) && col.get(c).has(val)) ||
                    (sq.get(sqKey) && sq.get(sqKey).has(val))
                ) {
                    return false;
                }

                if (!row.get(r)) {
                    row.set(r, new Set());
                }
                if (!col.get(c)) {
                    col.set(c, new Set());
                }
                if (!sq.get(sqKey)) {
                    sq.set(sqKey, new Set());
                }

                row.get(r).add(val);
                col.get(c).add(val);
                sq.get(sqKey).add(val);
            }
        }

        return true;
    }
}
