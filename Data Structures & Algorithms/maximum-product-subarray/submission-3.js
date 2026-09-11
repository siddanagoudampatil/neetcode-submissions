class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        const n = nums.length;
        let res = nums[0];
        let prefix = 0, suffix = 0;

        for (let i = 0; i < n; i++) {
            prefix = nums[i] * (prefix !== 0 ? prefix : 1);
            suffix = nums[n - 1 - i] * (suffix !== 0 ? suffix : 1);

            res = Math.max(res, prefix, suffix);
        }

        return res === -0 ? 0 : res;
    }
}
