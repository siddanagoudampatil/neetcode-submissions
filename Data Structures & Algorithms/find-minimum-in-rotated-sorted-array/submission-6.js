class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;

        for (let i = 0; i < nums.length; i++) {
            min = Math.min(min, nums[i]);
        }

        return min;
    }
}
