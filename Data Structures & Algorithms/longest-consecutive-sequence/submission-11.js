class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        nums.sort((a, b) => a - b);

        let i = 0;
        let res = 0;
        
        while (i < nums.length) {
            let j = i;
            let streak = 1;

            while (j + 1 < nums.length) {
                if (nums[j + 1] === nums[j] + 1) {
                    streak++;
                    j++;
                } else if (nums[j + 1] === nums[j]) {
                    j++;
                } else {
                    break;
                }
            }

            res = Math.max(res, streak);
            i = j + 1;
        }

        return res;
    }
}
