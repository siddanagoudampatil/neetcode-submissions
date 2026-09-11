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
            if (r === 0 || r === ROWS - 1 || c === 0 || c === COLS - 1) {
                return false;
            }

            board[r][c] = 'X';

            let flag = true;
            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && board[nr][nc] === 'O') {
                    flag = flag && dfs(nr, nc);
                }
            }

            board[r][c] = 'O';

            return flag;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (board[r][c] === 'O') {
                    if (dfs(r, c)) {
                        board[r][c] = 'X';
                    }
                }
            }
        }
    }
}
