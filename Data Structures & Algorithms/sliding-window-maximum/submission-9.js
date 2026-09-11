class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            let j = i;
            let max = -Infinity;
            while (j < nums.length && j < i + k) {
                max = Math.max(max, nums[j]);
                j++;
            }
            if (i > nums.length - k) {
                break;
            }
            res.push(max);
        }

        return res;
    }
}
