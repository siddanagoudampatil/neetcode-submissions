class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        for (let row = 0; row < 9; row++) {
            const seen = new Set();
            for (let i = 0; i < 9; i++) {
                const val = board[row][i];
                if (val === ".") {
                    continue;
                }

                if (seen.has(val)) {
                    return false;
                }

                seen.add(val);
            }
        }

        for (let col = 0; col < 9; col++) {
            const seen = new Set();
            for (let i = 0; i < 9; i++) {
                const val = board[i][col];
                if (val === ".") {
                    continue;
                }

                if (seen.has(val)) {
                    return false;
                }

                seen.add(val);
            }
        }

        for (let sq = 0; sq < 9; sq++) {
            const seen = new Set();
            for (let i = 0; i < 3; i++) {
                const r = Math.floor(sq / 3) * 3 + i;
                for (let j = 0; j < 3; j++) {
                    const c = (sq % 3) * 3 + j;
                    const val = board[r][c];

                    if (val === ".") {
                        continue;
                    }

                    if (seen.has(val)) {
                        return false;
                    }

                    seen.add(val);
                }
            }
        }

        return true;
    }
}
