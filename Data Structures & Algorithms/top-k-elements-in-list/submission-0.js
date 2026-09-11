class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        for (const num of nums) {
            if (!map[num]) {
                map[num] = {
                    val: num,
                    count: 1,
                };
            } else {
                map[num].count++;
            }
        }
        const res = Object.keys(map).map((key) => [map[key].val, map[key].count]);
        res.sort((a, b) => b[1] - a[1]);
        return res.slice(0, k).map((ele) => ele[0]).sort();
    }
}
