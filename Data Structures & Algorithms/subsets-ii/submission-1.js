class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);

        const res = [];
        const subset = [];

        const backtrack = (i) => {
            if (i === nums.length) {
                res.push([...subset]);
                return;
            }

            subset.push(nums[i]);
            backtrack(i + 1);

            subset.pop();

            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }

            backtrack(i + 1);
        }

        backtrack(0);

        return res;
    }
}
