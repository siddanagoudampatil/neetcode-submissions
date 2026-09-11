class Solution {
    /**
     * @param {number[][]} heights
     * @return {number[][]}
     */
    pacificAtlantic(heights) {
        const ROWS = heights.length;
        const COLS = heights[0].length;
        const directions = [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ];

        const pacific = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        const dfs = (r, c, ocean) => {
            ocean[r][c] = true;

            for (const [dr, dc] of directions) {
                const nr = r + dr;
                const nc = c + dc;

                if (
                    nr >= 0 &&
                    nr < ROWS &&
                    nc >= 0 &&
                    nc < COLS &&
                    heights[nr][nc] >= heights[r][c] &&
                    !ocean[nr][nc]
                ) {
                    dfs(nr, nc, ocean);
                }
            }
        };

        for (let r = 0; r < ROWS; r++) {
            dfs(r, 0, pacific);
            dfs(r, COLS - 1, atlantic);
        }

        for (let c = 0; c < COLS; c++) {
            dfs(0, c, pacific);
            dfs(ROWS - 1, c, atlantic);
        }

        const res = [];
        for (let r = 0; r < ROWS; r++) {
            for (let c = 0; c < COLS; c++) {
                if (pacific[r][c] && atlantic[r][c]) {
                    res.push([r, c]);
                }
            }
        }

        return res;
    }
}
