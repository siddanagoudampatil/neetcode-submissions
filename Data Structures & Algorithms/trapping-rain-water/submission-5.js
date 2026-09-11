class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        const leftMax = new Array(n);
        const rightMax = new Array(n);
        let res = 0;

        if (n === 0) {
            return res;
        }

        let max = height[0];
        for (let i = 0; i < n; i++) {
            max = Math.max(max, height[i]);
            leftMax[i] = max;
        }
        console.log(height)
        console.log(leftMax)

        max = height[n - 1];
        for (let i = n - 1; i >= 0; i--) {
            max = Math.max(max, height[i]);
            rightMax[i] = max;
        }

        for (let i = 0; i < n; i++) {
            res += Math.min(leftMax[i], rightMax[i]) - height[i];
        }

        return res;
    }
}
