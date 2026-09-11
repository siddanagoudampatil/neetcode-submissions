class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProduct = new Array(nums.length).fill(1);
        const rightProduct = new Array(nums.length).fill(1);

        for (let i = 1; i < nums.length; i++) {
            leftProduct[i] = nums[i - 1] * leftProduct[i - 1];
            rightProduct[nums.length - i - 1] =
                nums[nums.length - i] * rightProduct[nums.length - i];
        }

        for (let i = 0; i < nums.length; i++) {
            leftProduct[i] *= rightProduct[i];
        }

        return leftProduct;
    }
}
