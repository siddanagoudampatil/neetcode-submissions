class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        const n = heights.length;
        let maxArea = 0;

        for (let i = 0; i < n; i++) {
            let r = i + 1;
            while (r < n && heights[r] >= heights[i])
                r++;
            
            let l = i - 1;
            while (l >= 0 && heights[l] >= heights[i])
                l--;

            r--;
            l++;

            maxArea = Math.max(maxArea, heights[i] * (r - l + 1));
        }
        return maxArea;
    }
}
