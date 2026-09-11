class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const cache = {};
        const dfs = (i, j) => {
            if (i === nums.length) {
                return 0;
            }

            const key = `${i},${j}`;
            if (cache[key]) {
                return cache[key];
            }

            let res = dfs(i + 1, j);

            if (j === -1 || nums[j] < nums[i]) {
                res = Math.max(res, 1 + dfs(i + 1, i));
            }

            return cache[key] = res;
        }

        return dfs(0, -1);
    }
}
