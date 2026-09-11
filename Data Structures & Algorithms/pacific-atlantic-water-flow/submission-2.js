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

        const bfs = (queue, ocean) => {
            while (queue.length) {
                const size = queue.length;

                for (let i = 0; i < size; i++) {
                    const [r, c] = queue.shift();
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
                            queue.push([nr, nc]);
                        }
                    }
                }
            }
        };

        const pacificQueue = [];
        const atlanticQueue = [];

        for (let r = 0; r < ROWS; r++) {
            pacificQueue.push([r, 0]);
            atlanticQueue.push([r, COLS - 1]);
        }

        for (let c = 0; c < COLS; c++) {
            pacificQueue.push([0, c]);
            atlanticQueue.push([ROWS - 1, c]);
        }

        const pacific = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
        const atlantic = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));

        bfs(pacificQueue, pacific);
        bfs(atlanticQueue, atlantic);

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
