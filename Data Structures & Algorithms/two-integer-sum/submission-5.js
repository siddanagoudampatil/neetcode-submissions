class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const arr = [];
        for (let i = 0; i < nums.length; i++) {
            arr.push([nums[i], i]);
        }

        arr.sort((a, b) => a[0] - b[0]);

        let i = 0, j = arr.length - 1;

        while (i < j) {
            const sum = arr[i][0] + arr[j][0];
            if (sum === target) {
                const minIdx = Math.min(arr[i][1], arr[j][1]);
                const maxIdx = Math.max(arr[i][1], arr[j][1]);
                return [minIdx, maxIdx];
            } else if (sum > target) {
                j--;
            } else {
                i++;
            }
        }

        return [-1, -1];
    }
}
