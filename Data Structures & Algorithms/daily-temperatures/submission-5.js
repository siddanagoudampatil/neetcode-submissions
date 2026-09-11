class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = [];

        for (let i = 0; i < n; i++) {
            let interval = 0;
            for (let j = i + 1; j < n; j++) {
                if (temperatures[i] < temperatures[j]) {
                    interval = j - i;
                    break;
                }
            }
            res.push(interval);
        }

        return res;
    }
}
