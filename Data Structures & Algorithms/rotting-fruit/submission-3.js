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

        const visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        const queue = [];

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 2) {
                    queue.push([r, c]);
                    visited[r][c] = true;
                }
            }
        }

        let minutes = 0;
        while (queue.length) {
            const size = queue.length;
            console.log(size, minutes)

            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();

                grid[r][c] = 2;

                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;
                    if (
                        nr >= 0 &&
                        nr < ROWS &&
                        nc >= 0 &&
                        nc < COLS &&
                        grid[nr][nc] === 1 &&
                        !visited[nr][nc]
                    ) {
                        queue.push([nr, nc]);
                        visited[nr][nc] = true;
                    }
                }
            }
            if (queue.length) {
                minutes++;
            }
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    return -1;
                }
            }
        }

        return minutes;
    }
}
