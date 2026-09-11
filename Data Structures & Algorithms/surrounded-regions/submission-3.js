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

        const dfs = (r, c) => {
            board[r][c] = "NC";
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === "O") {
                    dfs(nr, nc);
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            if (board[r][0] === 'O') dfs(r, 0);
            if (board[r][COLS - 1] === 'O') dfs(r, COLS - 1);
        }

        for (let c = 0; c < COLS; c++) {
            if (board[0][c] === 'O') dfs(0, c);
            if (board[ROWS - 1][c] === 'O') dfs(ROWS - 1, c);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O') board[r][c] = 'X';
                if (board[r][c] === 'NC') board[r][c] = 'O';
            }
        }
    }
}
