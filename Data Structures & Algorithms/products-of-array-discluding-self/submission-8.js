class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);
        let leftProd = 1, rightProd = 1;

        let i = 0, j = nums.length - 1;

        while (j >= 0 && i < nums.length) {
            res[i] *= leftProd;
            leftProd *= nums[i];
            i++;

            res[j] *= rightProd;
            rightProd *= nums[j];
            j--;
        }

        return res;
    }
}
