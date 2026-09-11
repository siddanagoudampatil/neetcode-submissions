class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        // DFS now carries the current distance traveled
        const dfs = (r, c, dist) => {
            // 1. Base Boundary Check
            if (r < 0 || r >= ROWS || c < 0 || c >= COLS || grid[r][c] === -1) {
                return;
            }

            // 2. The Pruning Condition (The Optimization)
            // If the cell already holds a distance that is shorter than or equal 
            // to our current path, this branch is useless. Stop exploring.
            // (We bypass this check for the starting treasure where dist === 0)
            if (dist !== 0 && grid[r][c] <= dist) {
                return;
            }

            // 3. Record the new, shorter distance
            grid[r][c] = dist;

            // 4. Continue exploring outward, adding 1 to the distance
            dfs(r + 1, c, dist + 1);
            dfs(r - 1, c, dist + 1);
            dfs(r, c + 1, dist + 1);
            dfs(r, c - 1, dist + 1);
        }

        // Trigger the DFS from every treasure location
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === 0) {
                    dfs(r, c, 0);
                }
            }
        }
    }
}
