class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);

        let res = 0;

        for (const num of nums) {
            let curr = num;
            let streak = 0;

            while (set.has(curr)) {
                streak++;
                curr++;
            }

            res = Math.max(res, streak);
        }

        return res;
    }
}
