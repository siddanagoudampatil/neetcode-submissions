class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const n = nums.length;

        if (n === 1) {
            return nums[0];
        }

        let res = new Array(n).fill(-1);

        const dfs = (i, flag) => {
            if (i >= n || (flag && i === n - 1)) {
                return 0;
            }

            if (res[i] !== -1) {
                return res[i];
            }

            return res[i] = Math.max(dfs(i + 1, flag), nums[i] + dfs(i + 2, flag));
        }

        let ans = dfs(0, true);

        res = new Array(n).fill(-1);

        return Math.max(ans, dfs(1, false));
    }
}
