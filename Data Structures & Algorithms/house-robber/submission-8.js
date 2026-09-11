class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const cache = new Array(nums.length).fill(-1);
        const dfs = (i) => {
            if (i >= nums.length) {
                return 0;
            }

            if (cache[i] !== -1) return cache[i];

            return cache[i] = Math.max(dfs(i + 1), dfs(i + 2) + nums[i]);
        }

        return dfs(0);
    }
}
