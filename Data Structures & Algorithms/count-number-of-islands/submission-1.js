class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid) {
        const ROWS = grid.length;
        const COLS = grid[0].length;

        const bfs = (r, c) => {
            const queue = [[r, c]];
            grid[r][c] = '0';

            while (queue.length) {
                const [r, c] = queue.shift();
                // left
                if (c > 0 && grid[r][c - 1] === '1') {
                    queue.push([r, c - 1]);
                    grid[r][c - 1] = '0';
                }
                // right
                if (c < COLS - 1 && grid[r][c + 1] === '1') {
                    queue.push([r, c + 1]);
                    grid[r][c + 1] = '0';
                }
                // up
                if (r > 0 && grid[r - 1][c] === '1') {
                    queue.push([r - 1, c]);
                    grid[r - 1][c] = '0';
                }
                // down
                if (r < ROWS - 1 && grid[r + 1][c] === '1') {
                    queue.push([r + 1, c]);
                    grid[r + 1][c] = '0';
                }
            }
        }

        let islands = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    islands++;
                }
            }
        }

        return islands;
    }
}
