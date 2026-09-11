class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const length = nums.length;
        const res = new Array(length).fill(1);

        let leftProduct = 1;
        for (let i = 0; i < length; i++) {
            res[i] *= leftProduct;
            leftProduct *= nums[i];
        }

        let rightProduct = 1;
        for (let i = length - 1; i >= 0; i--) {
            res[i] *= rightProduct;
            rightProduct *= nums[i];
        }

        return res;
    }
}
