class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let totalProduct = 1, numOfZeros = 0;
        for (const num of nums) {
            if (num === 0) {
                numOfZeros += 1;
                if (numOfZeros > 1) {
                    return new Array(nums.length).fill(0);
                }
                continue;
            }
            totalProduct *= num;
        }

        const res = new Array(nums.length).fill(0)
        for (let i = 0; i < nums.length; i++) {
            if (numOfZeros === 1) {
                if (nums[i] === 0) {
                    res[i] = totalProduct;
                }
            } else {
                res[i] = totalProduct / nums[i];
            }
        }

        return res;
    }
}
