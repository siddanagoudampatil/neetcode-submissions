class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        let freshFruits = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    freshFruits++;
                }
            }
        }

        let minutes = 0;

        while (freshFruits > 0) {
            let flag = false;

            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    if (grid[r][c] === 2) {
                        for (const [dr, dc] of directions) {
                            const nr = r + dr;
                            const nc = c + dc;

                            if (
                                nr >= 0 &&
                                nr < ROWS &&
                                nc >= 0 &&
                                nc < COLS &&
                                grid[nr][nc] === 1
                            ) {
                                grid[nr][nc] = 3;
                                freshFruits--;
                                flag = true;
                            }
                        }
                    }
                }
            }

            if (!flag) {
                return -1;
            }

            for (let r = 0; r < ROWS; r++) {
                for (let c = 0; c < COLS; c++) {
                    if (grid[r][c] === 3) {
                        grid[r][c] = 2;
                    }
                }
            }

            minutes++;
        }

        return minutes;
    }
}
