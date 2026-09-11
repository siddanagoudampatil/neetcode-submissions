class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const sumMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            const newValue = target - nums[i];
            if (sumMap.has(newValue)) {
                return [i, sumMap.get(newValue)];
            }
            sumMap.set(nums[i], i);
        }
    }
}
