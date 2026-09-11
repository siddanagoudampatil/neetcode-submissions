class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const leftProd = new Array(nums.length);
        const rightProd = new Array(nums.length);

        let i = 0, prod = 1;
        while (i < nums.length) {
            leftProd[i] = prod;
            prod *= nums[i];
            i++;
        }

        i = nums.length - 1, prod = 1;
        while (i >= 0) {
            rightProd[i] = prod;
            prod *= nums[i];
            i--;
        }

        for (let i = 0; i < nums.length; i++) {
            rightProd[i] = rightProd[i] * leftProd[i];
        }

        return rightProd;
    }
}
