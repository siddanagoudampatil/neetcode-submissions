class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const stack = [];
        let res = 0;

        for (let i = 0; i < height.length; i++) {
            while (stack.length && height[i] > height[stack[stack.length - 1]]) {
                const mid = height[stack.pop()];
                if (stack.length) {
                    const left = height[stack[stack.length - 1]];
                    const h = Math.min(left, height[i]) - mid;
                    const w = i - stack[stack.length - 1] - 1;
                    res += h * w;
                }
            }
            stack.push(i);
        }

        return res;
    }
}
