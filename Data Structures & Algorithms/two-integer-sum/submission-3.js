class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            const remain = target - nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] === remain) {
                    return [i, j];
                }
            }
        }

        return [-1, -1];
    }
}
