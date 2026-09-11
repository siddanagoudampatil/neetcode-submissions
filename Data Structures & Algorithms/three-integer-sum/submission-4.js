class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const n = nums.length;
        const res = new Set();

        for (let i = 0; i < n; i++) {
            for (let j = i + 1; j < n; j++) {
                for (let k = j + 1; k < n; k++) {
                    if (nums[i] + nums[j] + nums[k] === 0) {
                        res.add(JSON.stringify([nums[i], nums[j], nums[k]].sort()));
                    }
                }
            }
        }

        return Array.from(res).map((val) => JSON.parse(val));
    }
}
