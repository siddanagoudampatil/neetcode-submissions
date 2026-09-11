class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let l = 0, r = nums.length - 1;

        if (nums[l] < nums[r]) return nums[l];

        while (l < r) {
            const m = l + Math.floor((r - l) / 2);
            if (nums[m] < nums[r]) {
                r = m
            } else{
                l = m + 1;
            }
        }

        return nums[l];
    }
}
