class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const INF = 2147483647;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const bfs = (r, c) => {
            const visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

            const queue = [[r, c]];
            visited[r][c] = true;

            let steps = 0;
            while (queue.length) {
                const size = queue.length;
                for (let i = 0; i < size; i++) {
                    const [r, c] = queue.shift();

                    if (grid[r][c] === 0) {
                        return steps;
                    }

                    for (const [dr, dc] of directions) {
                        const nr = r + dr;
                        const nc = c + dc;

                        if (
                            nr >= 0 &&
                            nr < ROWS &&
                            nc >= 0 &&
                            nc < COLS &&
                            grid[nr][nc] !== -1 &&
                            !visited[nr][nc]
                        ) {
                            queue.push([nr, nc]);
                            visited[nr][nc] = true;
                        }
                    }
                }
                steps++;
            }
            return INF;
        };

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
