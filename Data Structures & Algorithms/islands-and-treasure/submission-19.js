class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const queue = [];
        const visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    queue.push([r, c]);
                    visited[r][c] = true;
                }
            }
        }

         let steps = 0;
        while (queue.length) {
            const size = queue.length;
            for (let i = 0; i < size; i++) {
                const [r, c] = queue.shift();
                grid[r][c] = steps;
                for (const [dr, dc] of directions) {
                    const nr = r + dr;
                    const nc = c + dc;

                    if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS && !visited[nr][nc] && grid[nr][nc] !== -1) {
                        queue.push([nr, nc]);
                        visited[nr][nc] = true;
                    }
                }
            }
            steps++;
        }

        return grid;
    }
}
