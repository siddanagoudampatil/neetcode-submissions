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

        const freq = new Array(nums.length + 1).fill(null);

        for (const [key, val] of Object.entries(count)) {
            console.log(key, val, freq[val])
            if (freq[val]) {
                freq[val].push(Number(key));
            } else {
                freq[val] = [Number(key)]
            }
        }

        console.log(freq)

        const res = [];
        for (let i = nums.length; i >= 0; i--) {
            if (res.length === k) break;

            if (freq[i]) {
                res.push(...freq[i]);
            }
        }

        return res;
    }
}
