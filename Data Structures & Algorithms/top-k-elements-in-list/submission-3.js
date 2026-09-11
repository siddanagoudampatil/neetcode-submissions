class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const num of nums) {
            map[num] = map[num] ? map[num] + 1 : 1;
        }
        
        const test = Object.entries(map).sort((a, b) => b[1] - a[1]);

        const res = [];
        for (const num of test) {
            res.push(num[0]);
            k--;
            if (k === 0) break;
        }
        return res;
    }
}
