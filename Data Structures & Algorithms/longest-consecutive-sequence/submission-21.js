class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length === 0) return 0;

        nums.sort((a, b) => a - b);

        let i = 0, j = 0;
        let res = 1;
        for (let k = 1; k < nums.length; k++) {
            if (nums[k] - nums[k - 1] > 1) {
                i = k;
                j = k;
            } else if (nums[k] - nums[k - 1] === 0) {
                continue;
            } else {
                j++;
                res = Math.max(res, j - i + 1);
            }
        }

        return res;
    }
}
