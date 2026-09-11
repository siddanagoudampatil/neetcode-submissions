class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0;
        const stack = [];

        for (let i = 0; i < heights.length; i++) {
            let tempIdx = i;
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [idx, height] = stack.pop();
                maxArea = Math.max(maxArea, height * (i - idx));
                tempIdx = idx;
            }
            stack.push([tempIdx, heights[i]]);
        }

        for (const [idx, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - idx));
        }

        return maxArea;
    }
}
