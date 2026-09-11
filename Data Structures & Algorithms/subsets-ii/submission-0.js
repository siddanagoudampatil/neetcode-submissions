class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        nums.sort((a, b) => a - b);
        const res = new Set();
        const inst = [];

        const backtrack = (i) => {
            if (i === nums.length) {
                res.add(JSON.stringify(inst));
                return;
            }

            inst.push(nums[i]);
            backtrack(i + 1);

            inst.pop();
            backtrack(i + 1);
        }

        backtrack(0);

        return (Array.from(res).map((val) => JSON.parse(val)))
    }
}
