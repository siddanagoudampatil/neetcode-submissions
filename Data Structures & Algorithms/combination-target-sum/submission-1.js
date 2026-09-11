class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @returns {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];
        const subset = [];

        nums.sort((a, b) => a - b);

        const dfs = (i, sum) => {
            if (sum === target) {
                res.push([...subset]);
                return;
            }

            if (i >= nums.length || sum > target) {
                return;
            }

            subset.push(nums[i]);
            dfs(i, sum + nums[i]);

            subset.pop();
            if (sum + nums[i + 1] > target) {
                return;
            }
            dfs(i + 1, sum);
        };

        dfs(0, 0);
        return res;
    }
}
