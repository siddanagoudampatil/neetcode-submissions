class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = [];
        const subset = [];

        const backtrack = (idx) => {
            res.push([...subset]);

            for (let i = idx; i < nums.length; i++) {
                if (i > idx && nums[i] === nums[i - 1]) {
                    continue;
                }
                subset.push(nums[i]);
                backtrack(i + 1);
                subset.pop();
            }
        };

        backtrack(0);

        return res;
    }
}
