class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (const num of nums) {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        }

        const sortedArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a));

        return sortedArr.slice(0, k);
    }
}
