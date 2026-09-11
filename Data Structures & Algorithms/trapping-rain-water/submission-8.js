class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0) {
            return 0;
        }

        let res = 0;
        let l = 0, r = height.length - 1;
        let leftMax = height[l];
        let rightMax = height[r];

        while (l < r) {
            if (height[l] < height[r]) {
                leftMax = Math.max(leftMax, height[l]);
                res += leftMax - height[l];
                l++;
            } else {
                rightMax = Math.max(rightMax, height[r]);
                res += rightMax - height[r];
                r--;
            }
        }

        return res;
    }
}
