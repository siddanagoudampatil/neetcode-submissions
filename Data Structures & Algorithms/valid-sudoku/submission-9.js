class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = new Array(board.length).fill(null).map(() => new Set());
        let cols = new Array(board.length).fill(null).map(() => new Set());
        let boxes = {};

        for (let row = 0; row < board[0].length; row++) {
            for (let col = 0; col < board.length; col++) {
                let val = board[row][col];

                if (val === ".") continue;

                if (rows[row].has(val)) {
                    return false;
                } else {
                    rows[row].add(val);
                }

                if (cols[col].has(val)) {
                    return false;
                } else {
                    cols[col].add(val);
                }

                let boxKey = "" + Math.floor(row / 3) + Math.floor(col / 3);

                if (!boxes[boxKey]) {
                    boxes[boxKey] = new Set();
                }

                if (boxes[boxKey].has(val)) {
                    return false;
                } else {
                    boxes[boxKey].add(val);
                }
            }
        }

        return true;
    }
}
