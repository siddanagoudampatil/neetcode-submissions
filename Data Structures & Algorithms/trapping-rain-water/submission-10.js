class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;

        if (n <= 2) {
            return 0;
        }

        const leftMax = new Array(n).fill(0);
        const rightMax = new Array(n).fill(0);
        leftMax[0] = height[0];
        rightMax[n - 1] = height[n - 1];

        for (let i = 1; i < n; i++) {
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
            rightMax[n - 1 - i] = Math.max(rightMax[n - i], height[n - 1 - i]);
        }

        let res = 0;
        for (let i = 0; i < n; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;
    }
}
