class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefixProduct = new Array(nums.length).fill(1);
        const suffixProduct = new Array(nums.length).fill(1);
        const res = new Array(nums.length);

        for (let i = 1; i < nums.length; i++) {
            prefixProduct[i] = nums[i - 1] * prefixProduct[i - 1];
        }

        for (let i = nums.length - 2; i >= 0; i--) {
            suffixProduct[i] = nums[i + 1] * suffixProduct[i + 1];
        }

        for (let i = 0; i < nums.length; i++) {
            res[i] = prefixProduct[i] * suffixProduct[i];
        }

        return res;
    }
}
