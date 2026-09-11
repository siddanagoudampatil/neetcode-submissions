class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = [];

        for (let i = 0; i < temperatures.length; i++) {
            for (let j = i + 1; j < temperatures.length; j++) {
                if (temperatures[j] > temperatures[i]) {
                    res.push(j - i);
                    break;
                }
            }
            if (!res[i]) res.push(0);
        }

        return res;
    }
}
