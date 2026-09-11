class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const n = nums.length;
        const leftMax = new Array(n);
        const rightMax = new Array(n);

        leftMax[0] = nums[0];
        rightMax[n - 1] = nums[n - 1];

        for (let i = 0; i < n; i++) {
            if (i % k === 0) {
                leftMax[i] = nums[i];
            } else {
                leftMax[i] = Math.max(leftMax[i - 1], nums[i]);
            }

            let j = n - 1 - i;
            if ((j + 1) % k === 0) {
                rightMax[j] = nums[j];
            } else {
                rightMax[j] = Math.max(rightMax[j + 1], nums[j]);
            }
        }

        console.log("nums -> ", nums);
        console.log("leftMax -> ", leftMax);
        console.log("rightMax -> ", rightMax);

        const res = [];
        for (let i = 0; i < n - k + 1; i++) {
            res.push(Math.max(leftMax[i + k - 1], rightMax[i]));
        }

        return res;
    }
}
