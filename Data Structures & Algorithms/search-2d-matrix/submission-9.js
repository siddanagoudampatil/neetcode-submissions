class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let l = 0, r = ROWS * COLS - 1;

        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const row = Math.floor(m / COLS);
            const col = m % COLS;
            const val = matrix[row][col];
            if (val === target) {
                return true;
            } else if (val > target) {
                r = m - 1;
            } else {
                l = m + 1;
            }
        }

        return false;
    }
}
