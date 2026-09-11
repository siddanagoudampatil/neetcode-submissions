class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for (let i = 0; i < temperatures.length; i++) {
            const currTemp = temperatures[i];
            while (stack.length > 0 && currTemp > stack[stack.length - 1].temp) {
                const day = stack.pop().day;
                res[day] = i - day;
            }
            stack.push({ day: i, temp: temperatures[i] });
        }

        return res;
    }
}
