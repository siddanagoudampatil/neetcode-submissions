class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let r = 0;
        let c = matrix[0].length - 1;

        while (c >= 0 && r < matrix.length) {
            if (matrix[r][c] === target) {
                return true;
            } else if (matrix[r][c] < target) {
                r++;
            } else {
                c--;
            }
        }

        return false;
    }
}
