class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;
        const dfs = (i, j) => {
            grid[i][j] = '0';

            if (j < COLS - 1 && grid[i][j + 1] === '1') {
                dfs(i, j + 1);
            }
            if (i < ROWS - 1 && grid[i + 1][j] === '1') {
                dfs(i + 1, j);
            }
            if (j > 0 && grid[i][j - 1] === '1') {
                dfs(i, j - 1);
            }
            if (i > 0 && grid[i - 1][j] === '1') {
                dfs(i - 1, j);
            }
        }

        let res = 0;

        for (let i = 0; i < ROWS; i++) {
            for (let j = 0; j < COLS; j++) {
                if (grid[i][j] === '1') {
                    dfs(i, j);
                    res++;
                }
            }
        }

        return res;
    }
}
