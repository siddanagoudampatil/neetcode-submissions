class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];

        const backtrack = (idx) => {
            if (idx === nums.length) {
                res.push([...nums]);
                return;
            }

            for (let i = idx; i < nums.length; i++) {
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
                backtrack(idx + 1);
                [nums[i], nums[idx]] = [nums[idx], nums[i]];
            }
        }

        backtrack(0);

        return res;
    }
}
