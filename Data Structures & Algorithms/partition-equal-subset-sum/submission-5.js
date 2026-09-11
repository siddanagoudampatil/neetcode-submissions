class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const n = nums.length;
        const sum = nums.reduce((prev, val) => prev + val, 0);

        if (sum % 2 !== 0) {
            return false;
        }

        const target = sum / 2;
        const dp = new Array(target + 1).fill(false);
        dp[0] = true;

        for (let i = 0; i < n; i++) {
            for (let j = target; j >= nums[i]; j--) {
                dp[j] = dp[j] || dp[j - nums[i]];
                if (j === target && dp[target]) {
                    return true;
                } 
            }
        }

        return dp[target];
    }
}
