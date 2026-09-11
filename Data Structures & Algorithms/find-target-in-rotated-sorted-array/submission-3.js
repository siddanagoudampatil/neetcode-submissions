class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0, r = nums.length - 1;

        while (l < r) {
            const mid = l + Math.floor((r - l) / 2);

            if (nums[r] < nums[mid]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }

        const pivotIdx = l;
        l = 0, r = nums.length - 1;

        if (target >= nums[pivotIdx] && target <= nums[r]) {
            l = pivotIdx;
        } else {
            r = pivotIdx;
        }

        while (l <= r) {
            const mid = l + Math.floor((r - l) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[mid] > target) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }

        return -1;
    }
}
