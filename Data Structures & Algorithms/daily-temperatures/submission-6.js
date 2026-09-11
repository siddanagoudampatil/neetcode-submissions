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
            const temp = temperatures[i];
            while (stack.length && stack[stack.length - 1][0] < temp) {
                const top = stack.pop();
                res[top[1]] = i - top[1];
            }
            stack.push([temp, i]);
        }

        return res;
    }
}
