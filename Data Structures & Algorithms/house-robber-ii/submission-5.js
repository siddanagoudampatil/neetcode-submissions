class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        if (nums.length === 1) {
            return nums[0];
        }

        return Math.max(this.helper(nums.slice(1)), this.helper(nums.slice(0, nums.length - 1)));
    }

    helper(nums) {
        const n = nums.length;
        let stl1 = 0;
        let stl2 = 0;

        for (const num of nums) {
            const stl = Math.max(num + stl1, stl2);
            stl1 = stl2;
            stl2 = stl;
        }

        return stl2;
    }
}
