class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const n = temperatures.length;
        const res = new Array(n).fill(0);
        const stack = [];

        for (let i = 0; i < n; i++) {
            while (stack.length && stack[stack.length - 1][0] < temperatures[i]) {
                const pop = stack.pop();
                res[pop[1]] = i - pop[1];
            }
            stack.push([temperatures[i], i]);
        }

        return res;
    }
}
