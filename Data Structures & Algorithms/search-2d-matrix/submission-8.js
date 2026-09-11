class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let top = 0, bottom = ROWS - 1;
        let targetRow = -1;

        while (top <= bottom) {
            const mid = top + Math.floor((bottom - top) / 2);
            if (matrix[mid][COLS - 1] < target) {
                top = mid + 1;
            } else if (matrix[mid][0] > target) {
                bottom = mid - 1;
            } else {
                targetRow = mid;
                break;
            }
        }

        if (targetRow === -1) {
            return false;
        }

        let l = 0, r = COLS - 1;
        while (l <= r) {
            const m = l + Math.floor((r - l) / 2);
            const val = matrix[targetRow][m]
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
