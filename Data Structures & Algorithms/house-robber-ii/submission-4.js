class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)));
    }

    helper(nums) {
        const n = nums.length;

        if (n === 0) {
            return 0;
        }

        if (n === 1) {
            return nums[0];
        }

        const dp = new Array(n);
        dp[0] = nums[0];
        dp[1] = Math.max(nums[0], nums[1]);

        for (let i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], nums[i] + dp[i - 2]);
        }

        return dp[n - 1];
    }
}
