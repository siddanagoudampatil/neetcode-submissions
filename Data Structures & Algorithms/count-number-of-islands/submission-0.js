class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === "0") {
                return;
            }

            grid[r][c] = '0';

            // check left
            dfs(r, c - 1);
            // right
            dfs(r, c + 1);
            // up
            dfs(r - 1, c);
            // down
            dfs(r + 1, c);
        };

        let res = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    res++;
                }
            }
        }

        return res;
    }
}
