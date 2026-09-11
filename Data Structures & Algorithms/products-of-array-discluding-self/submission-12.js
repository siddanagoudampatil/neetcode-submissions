class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const res = new Array(nums.length).fill(1);

        let preffix = 1, suffix = 1;
        for (let i = 0; i < nums.length; i++) {
            res[i] *= preffix;
            preffix *= nums[i];
            res[nums.length - 1 - i] *= suffix;
            suffix *= nums[nums.length - 1 - i];
        }

        return res;
    }
}
