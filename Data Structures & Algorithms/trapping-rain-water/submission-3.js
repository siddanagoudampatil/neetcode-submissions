class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        if (height.length === 0) return 0;

        let l = 0, r = height.length - 1;
        let leftMax = 0, rightMax = 0;
        let totalAmt = 0;

        while (l < r) {
            if (height[l] < height[r]) {
                if (height[l] > leftMax) {
                    leftMax = height[l];
                } else {
                    totalAmt += leftMax - height[l];
                }
                l++;
            } else {
                if (height[r] > rightMax) {
                    rightMax = height[r];
                } else {
                    totalAmt += rightMax - height[r];
                }
                r--;
            }
        }

        return totalAmt;
    }
}
