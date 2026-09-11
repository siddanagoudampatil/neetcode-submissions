class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const noOfRows = matrix.length;
        const noOfCols = matrix[0].length;
        let r = 0;
        let c = noOfCols - 1;

        while (c >= 0 && c < noOfCols && r >= 0 && r < noOfRows) {
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
