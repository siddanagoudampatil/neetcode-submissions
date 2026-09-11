class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};

        for (const num of nums) {
            map[num] = (map[num] || 0) + 1;
        }

        const arr = Object.keys(map)
            .map((key) => [Number(key), map[key]])
            .sort((a, b) => a[1] - b[1]);

        const res = [];

        for (let i = 1; i <= k; i++) {
            res.push(arr[arr.length - i][0]);
        }

        return res;
    }
}
