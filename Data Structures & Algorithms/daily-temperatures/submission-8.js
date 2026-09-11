class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);

        for (let i = 0; i < n; i++) {
            for (let  j = i + 1; j < n; j++) {
                if (temperatures[i] < temperatures[j]) {
                    res[i] = j - i;
                    break;
                }
            }
        }

        return res;
    }
}
