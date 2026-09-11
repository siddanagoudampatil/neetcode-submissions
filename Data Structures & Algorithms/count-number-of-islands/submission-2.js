class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const dfs = (r, c) => {
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] !== '1') {
                return;
            }

            grid[r][c] = '0';

            dfs(r, c - 1);
            dfs(r, c + 1);
            dfs(r - 1, c);
            dfs(r + 1, c);
        }

        let count = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    dfs(r, c);
                    count++;
                }
            }
        }

        return count;
    }
}
