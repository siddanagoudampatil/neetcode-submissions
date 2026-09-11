class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = {};

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        map = Object.entries(map).sort((a, b) => b[1] - a[1]);
        const res = [];
        for (let i = 0; i < k; i++) {
            res.push(Number(map[i][0]));
        }

        return res;
    }
}
