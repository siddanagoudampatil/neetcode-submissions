class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        let rob1 = 0, rob2 = 0;

        for (let i = 0; i < nums.length; i++) {
            const temp = rob2;
            rob2 = Math.max(rob2, nums[i] + rob1);
            rob1 = temp;
        }

        return rob2;
    }
}
