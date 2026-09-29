class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = new Array(nums.length).fill(-1);

        const dfs = (i) => {
            if (i > nums.length - 1) {
                return 0;
            }

            if (memo[i] !== -1) {
                return memo[i];
            }

            return memo[i] = Math.max(dfs(i + 1), nums[i] + dfs(i + 2));
        }

        return Math.max(dfs(0), dfs(1));
    }
}
