class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const isValid = (board, r, c) => {
            for (let i = 1; i <= r; i++) {
                if (board[r - i][c] === 'Q') {
                    return false;
                }
            }

            let i = 1;
            while (r - i >= 0 && c - i >= 0) {
                if (board[r - i][c - i] === 'Q') {
                    return false;
                }
                i++;
            }

            i = 1;
            while (r - i >= 0 && c + i < board[0].length) {
                if (board[r - i][c + i] === 'Q') {
                    return false;
                }
                i++;
            }

            return true;
        }

        const res = [];
        const temp = Array.from({ length: n }, () => new Array(n).fill('.'));

        const dfs = (i, j) => {
            if (i >= n) {
                const tempArr = temp.map((val) => val.join(""));
                res.push(tempArr);
                return;
            }

            for (let j = 0; j < n; j++) {
                if (isValid(temp, i, j)) {
                    temp[i][j] = 'Q';
                    dfs(i + 1);
                    temp[i][j] = '.';
                }
            }
        }

        dfs(0);

        return res;
    }
}
