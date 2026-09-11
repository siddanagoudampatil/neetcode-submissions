class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        let i = 0, j = matrix[0].length - 1;

        while (i < matrix.length && j >= 0) {
            const val = matrix[i][j];
            if (val === target) {
                return true;
            } else if (val > target) {
                j--;
            } else {
                i++;
            }
        }

        return false;
    }
}
