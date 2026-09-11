class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // let maxHeight = -Infinity;
        let res = 0;

        let l = 0, r = heights.length - 1;

        while (l < r) {
            res = Math.max(res, Math.min(heights[l], heights[r]) * (r - l));
            if (heights[l] < heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return res;
    }
}
