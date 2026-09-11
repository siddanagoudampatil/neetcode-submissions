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

        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const key in map) {
            freq[map[key]].push(key);
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            res.push(...freq[i]);
            if (res.length === k) break;
        }

        return res;
    }
}
