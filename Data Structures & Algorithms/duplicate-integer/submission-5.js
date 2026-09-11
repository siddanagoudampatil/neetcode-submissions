class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};

        for (const num of nums) {
            if (map[num]) return true;
            map[num] = 1;
        }

        return false;
    }
}
