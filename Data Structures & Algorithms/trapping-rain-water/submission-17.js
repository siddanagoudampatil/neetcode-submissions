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

        let res = 0;
        let l = 0, r = n - 1;

        let leftMax = 0, rightMax = 0;

        while (l <= r) {
            if (leftMax < rightMax) {
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
