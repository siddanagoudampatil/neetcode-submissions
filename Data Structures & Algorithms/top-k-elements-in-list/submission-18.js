class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};
        for (const num of nums) {
            count[num] = (count[num] || 0) + 1;
        }

        const freq = Array.from({ length: nums.length + 1 }, () => []);

        for (const key in count) {
            freq[count[key]].push(parseInt(key));
        }

        const res = [];
        for (let i = freq.length - 1; i >= 0; i--) {
            for (const val of freq[i]) {
                res.push(val);
                if (res.length === k) return res;
            }
        }

        return res;
    }
}
