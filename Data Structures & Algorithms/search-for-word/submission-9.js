class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const visited = new Set();

        const dfs = (r, c, i) => {
            if (visited.has(`${r},${c}`)) {
                return false;
            }

            if (board[r][c] !== word[i]) {
                return false;
            }

            if (i === word.length - 1) {
                return true;
            }

            visited.add(`${r},${c}`);

            // left
            if (c > 0) {
                if (dfs(r, c - 1, i + 1)) {
                    return true;
                }
            }

            // right
            if (c < COLS - 1) {
                if (dfs(r, c + 1, i + 1)) {
                    return true;
                }
            }

            // up
            if (r > 0) {
                if (dfs(r - 1, c, i + 1)) {
                    return true;
                }
            }

            // down
            if (r < ROWS - 1) {
                if (dfs(r + 1, c, i + 1)) {
                    return true;
                }
            }

            visited.delete(`${r},${c}`);
            return false;
        };

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (dfs(r, c, 0)) {
                    return true;
                }
            }
        }

        return false;
    }
}
