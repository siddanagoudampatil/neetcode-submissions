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

        const countBucket = Array.from({ length: nums.length + 1 }, () => []);
        for (const [num, cnt] of Object.entries(count)) {
            countBucket[cnt].push(parseInt(num));
        }

        let res = [];
        for (let i = countBucket.length - 1; i >= 0; i--) {
            for (const num of countBucket[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
        return res;
    }
}
