class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let maxProduct = 1;
        let containsZero = false;
        for (const num of nums) {
            if (num === 0 && !containsZero) {
                containsZero = true;
                continue;
            }
            maxProduct *= num;
        }

        const res = [];
        for (let i = 0; i < nums.length; i++) {
            if (!containsZero) {
                res[i] = maxProduct / nums[i];
            } else {
                res[i] = nums[i] === 0 ? maxProduct : 0;
            }
        }

        return res;
    }
}
