class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const map = Array.from({ length: m }, () => new Array(n).fill(-1));

        const dfs = (i, j) => {
            if (i === m && j === n) {
                return 1;
            }

            if (map[i - 1][j - 1] !== -1) {
                return map[i - 1][j - 1];
            }

            let res = 0;
            if (j + 1 <= n) {
                res += dfs(i, j + 1);
            }

            if (i + 1 <= m) {
                res += dfs(i + 1, j);
            }

            map[i - 1][j - 1] = res;

            return res;
        }

        return dfs(1, 1);
    }
}
