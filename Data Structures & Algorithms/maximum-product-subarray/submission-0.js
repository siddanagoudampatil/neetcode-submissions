class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let res = -Infinity;

        for (let i = 0; i < n; i++) {
            let product = 1;
            for (let j = i; j < n; j++) {
                product *= nums[j];
                if (product > res) {
                    res = product;
                }
            }
        }

        return res >= 0 ? Math.abs(res) : -Math.abs(res);
    }
}
