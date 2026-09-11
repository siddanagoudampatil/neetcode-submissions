class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map = {};
        for (const num of nums) {
            if (map[num] === 1) {
                return true;
            }
            map[num] = (map[num] || 0) + 1;
        }

        return false;
    }
}
