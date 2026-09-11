class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const map = {};

        for (const num of nums) {
            if (map[num]) {
                return num;
            } else {
                map[num] = 1;
            }
        }

        return 0;
    }
}
