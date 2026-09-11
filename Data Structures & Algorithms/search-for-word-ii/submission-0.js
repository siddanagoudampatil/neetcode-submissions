class Solution {
    /**
     * @param {character[][]} board
     * @param {string[]} words
     * @return {string[]}
     */
    findWords(board, words) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const res = [];

        const find = (r, c, i, word) => {
            if (i === word.length) {
                return true;
            }

            if (r < 0 || c < 0 || r >= ROWS || c >= COLS || board[r][c] !== word[i]) {
                return false;
            }

            const temp = board[r][c];
            board[r][c] = "*";

            const res =
                find(r + 1, c, i + 1, word) ||
                find(r - 1, c, i + 1, word) ||
                find(r, c + 1, i + 1, word) ||
                find(r, c - 1, i + 1, word);

            board[r][c] = temp;

            return res;
        };

        for (const word of words) {
            let flag = false;

            for (let r = 0; r < ROWS; r++) {
                if (flag) {
                    break;
                }

                for (let c = 0; c < COLS; c++) {
                    if (board[r][c] !== word[0]) {
                        continue;
                    }

                    if (find(r, c, 0, word)) {
                        res.push(word);
                        flag = true;
                        break;
                    }
                }
            }
        }

        return res;
    }
}
