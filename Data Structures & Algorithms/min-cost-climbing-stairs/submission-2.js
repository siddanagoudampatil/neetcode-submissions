class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const cache = new Array(cost.length).fill(-1);
        const dfs = (i) => {
            console.log(i, cost[i]);
            if (i >= cost.length) {
                return 0;
            }

            if (cache[i] !== -1) {
                return cache[i];
            }

            return cache[i] = cost[i] + Math.min(dfs(i + 1), dfs(i + 2));
        }

        return Math.min(dfs(0), cache[1]);
    }
}
