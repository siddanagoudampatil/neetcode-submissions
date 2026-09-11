class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c, dist) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === -1) {
                return;
            }

            if (dist !== 0 && grid[r][c] <= dist) {
                return;
            }

            grid[r][c] = dist;

            dfs(r + 1, c, dist + 1);
            dfs(r - 1, c, dist + 1);
            dfs(r, c + 1, dist + 1);
            dfs(r, c - 1, dist + 1);
        }

        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    dfs(r, c, 0);
                }
            }
        }
    }
}
