class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let res = 0;

        for (const num of nums) {
            if (!set.has(num - 1)) {
                let len = 1;
                while (set.has(num + len)) {
                    len++;
                }
                res = Math.max(res, len);
            }
        }

        return res;
    }
}
