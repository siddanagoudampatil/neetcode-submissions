class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;
        for (const num of nums) {
            let tempRes = 0,
                curr = num;

            while (set.has(curr)) {
                tempRes++;
                curr++;
            }

            if (tempRes > res) {
                res = tempRes;
            }
        }
        return res;
    }
}
