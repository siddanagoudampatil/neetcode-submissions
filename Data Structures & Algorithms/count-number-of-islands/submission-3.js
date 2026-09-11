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

                if (c > 0 && grid[r][c - 1] === '1') {
                    grid[r][c - 1] = '0';
                    queue.push([r, c - 1]);
                }

                if (c < COLS - 1 && grid[r][c + 1] === '1') {
                    grid[r][c + 1] = '0';
                    queue.push([r, c + 1]);
                }

                if (r > 0 && grid[r - 1][c] === '1') {
                    grid[r - 1][c] = '0';
                    queue.push([r - 1, c]);
                }

                if (r < ROWS - 1 && grid[r + 1][c] === '1') {
                    grid[r + 1][c] = '0';
                    queue.push([r + 1, c]);
                }
            }
        }

        let count = 0;
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (grid[r][c] === '1') {
                    bfs(r, c);
                    count++;
                }
            }
        }

        return count;
    }
}
