class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const INF = 2147483647;

        const bfs = (r, c) => {
            const queue = [[r, c]];
            const visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
            visited[r][c] = true;
            let steps = 0;

            while (queue.length) {
                const size = queue.length;

                for (let i = 0; i < size; i++) {
                    const [r, c] = queue.shift();
                    if (grid[r][c] === 0) return steps;

                    if (c > 0 && grid[r][c - 1] !== -1 && !visited[r][c - 1]) {
                        visited[r][c] = true;
                        queue.push([r, c - 1]);
                    }

                    if (c < COLS - 1 && grid[r][c + 1] !== -1 && !visited[r][c + 1]) {
                        visited[r][c] = true;
                        queue.push([r, c + 1]);
                    }

                    if (r > 0 && grid[r - 1][c] !== -1 && !visited[r - 1][c]) {
                        visited[r][c] = true;
                        queue.push([r - 1, c]);
                    }

                    if (r < ROWS - 1 && grid[r + 1][c] !== -1 && !visited[r + 1][c]) {
                        visited[r][c] = true;
                        queue.push([r + 1, c]);
                    }
                }

                steps++;
            }

            return INF;
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === INF) {
                    grid[r][c] = bfs(r, c);
                }
            }
        }

        return grid;
    }
}
