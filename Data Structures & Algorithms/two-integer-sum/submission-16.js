class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        nums = nums.map((val, idx) => [val, idx]);

        nums.sort((a, b) => a[0] - b[0]);

        let i = 0,
            j = nums.length - 1;

        while (i < j) {
            const sum = nums[i][0] + nums[j][0];
            if (sum === target) {
                return [Math.min(nums[i][1], nums[j][1]), Math.max(nums[i][1], nums[j][1])];
            } else if (sum < target) {
                i++;
            } else {
                j--;
            }
        }

        return [-1, -1];
    }
}
