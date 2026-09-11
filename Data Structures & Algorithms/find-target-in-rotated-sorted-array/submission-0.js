class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        for (const i in nums) {
            if (nums[i] === target) {
                return i;
            }
        }

        return -1;
    }
}
