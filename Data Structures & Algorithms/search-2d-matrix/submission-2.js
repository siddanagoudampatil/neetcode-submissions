class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length, COLS = matrix[0].length;
        
        if (ROWS <= 0 || COLS <= 0) return false;

        let top = 0, bottom = ROWS - 1;
        while (top <= bottom) {
            const row = Math.floor((top + bottom) / 2);
            if (target > matrix[row][COLS - 1]) top++;
            else if (target < matrix[row][0]) bottom--;
            else break;
        }

        if (top > bottom) return false;

        const row = Math.floor((top + bottom) / 2);
        let l = 0, r = COLS - 1;
        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (matrix[row][mid] === target) return true;
            else if (matrix[row][mid] < target) l = mid + 1;
            else r = mid - 1;
        }

        return false;
    }
}
