class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === 0) {
                return 0;
            }

            grid[r][c] = 0;
            let res = 1;
            res += dfs(r, c - 1);
            res += dfs(r, c + 1);
            res += dfs(r - 1, c);
            res += dfs(r + 1, c);

            return res;
        };

        let res = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 1) {
                    res = Math.max(res, dfs(r, c));
                }
            }
        }

        return res;
    }
}
