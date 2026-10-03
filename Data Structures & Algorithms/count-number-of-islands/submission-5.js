class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const dfs = (i, j) => {
            if (i < 0 || j < 0 || i === grid.length || j === grid[0].length) {
                return;
            }
            
            grid[i][j] = '0';

            if (i < grid.length - 1 && grid[i + 1][j] === '1') {
                dfs(i + 1, j);
            }

            if (j < grid[0].length - 1 && grid[i][j + 1] === '1') {
                dfs(i, j + 1);
            }

            if (i > 0 && grid[i - 1][j] === '1') {
                dfs(i - 1, j);
            }

            if (j > 0 &&grid[i][j - 1] === '1') {
                dfs(i, j - 1);
            }
        }

        let res = 0;

        for (let i = 0; i < grid.length; i++) {
            for (let j = 0; j < grid[0].length; j++) {
                if (grid[i][j] === '1') {
                    dfs(i, j);
                    res++;
                }
            }
        }

        return res;
    }
}
