class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = Infinity;

        for (const num of nums) {
            min = Math.min(min, num);
        }

        return min;
    }
}
