class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = 1;
        let numOfZeros = 0;

        const res = new Array(nums.length).fill(0);

        for (const num of nums) {
            if (num === 0) {
                numOfZeros++;
            } else {
                prod *= num;
            }
        }

        if (numOfZeros > 1) {
            return res;
        }

        for (let i = 0; i < nums.length; i++) {
            if (numOfZeros >= 1) {
                if (nums[i] === 0) {
                    res[i] = prod;
                } else {
                    res[i] = 0;
                }
            } else {
                res[i] = prod / nums[i];
            }
        }

        return res;
    }
}
