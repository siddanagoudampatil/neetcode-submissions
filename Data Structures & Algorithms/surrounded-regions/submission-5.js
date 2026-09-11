class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const ROWS = board.length;
        const COLS = board[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const queue = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (
                    (r === 0 || c === 0 || r === ROWS - 1 || c === COLS - 1) &&
                    board[r][c] === "O"
                ) {
                    queue.push([r, c]);
                }
            }
        }

        while (queue.length) {
            const [r, c] = queue.shift();
            board[r][c] = "NC";
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === "O") {
                    queue.push([nr, nc]);
                }
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === "O") {
                    board[r][c] = "X";
                }

                if (board[r][c] === "NC") {
                    board[r][c] = "O";
                }
            }
        }
    }
}
