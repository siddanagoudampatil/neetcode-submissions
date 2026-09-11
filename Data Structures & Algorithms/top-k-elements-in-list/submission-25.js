class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();
        nums.forEach((num) => {
            if (map.has(num)) {
                map.set(num, map.get(num) + 1);
            } else {
                map.set(num, 1);
            }
        });

        const entries = [...map].sort((a, b) => b[1] - a[1]);

        let answer = [];
        for (let i = 0; i < k; i++) {
            const [key] = entries[i];
            answer.push(key);
        }
        return answer;
    }
}
