class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        for (let i = 0; i < nums.length; i++) {
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    res[i] *= nums[j];
                }
            }
        }
        return res;
    }
}
