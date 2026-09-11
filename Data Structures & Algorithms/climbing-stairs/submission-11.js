class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const cache = new Array(n).fill(-1);
        const dfs = (curr) => {
            if (curr > n) {
                return 0;
            }

            if (curr === n) {
                return 1;
            }

            if (cache[curr] !== -1) {
                return cache[curr];
            }

            return cache[curr] = dfs(curr + 1) + dfs(curr + 2);
        }

        return dfs(0);
    }
}
