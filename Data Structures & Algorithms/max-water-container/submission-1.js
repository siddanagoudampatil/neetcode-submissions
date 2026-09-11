class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxAmount = 0;

        let l = 0, r = heights.length - 1;

        while (l < r) {
            maxAmount = Math.max(maxAmount, (r - l) * Math.min(heights[l], heights[r]));
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return maxAmount;
    }
}
