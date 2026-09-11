class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const n = nums.length;

        const dfs = (i, target) => {
            if (i >= n || target < 0) {
                return false;
            }

            if (target === 0) {
                return true;
            }

            return dfs(i + 1, target - nums[i]) || dfs(i + 1, target);
        }

        let sum = 0;
        for (const num of nums) {
            sum += num;
        }

        if (sum % 2 !== 0) {
            return false;
        }

        return dfs(0, sum / 2);
    }
}
