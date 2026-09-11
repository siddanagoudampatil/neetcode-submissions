class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const helperArr = [];
        for (let i = 0; i < nums.length; i++) {
            helperArr.push([nums[i], i]);
        }

        helperArr.sort((a, b) => a[0] - b[0]);

        let i = 0, j = helperArr.length - 1;

        while (i < j) {
            const tempSum = helperArr[i][0] + helperArr[j][0];
            if (tempSum === target) {
                return [Math.min(helperArr[i][1], helperArr[j][1]), Math.max(helperArr[i][1], helperArr[j][1])];
            } else if (tempSum > target) {
                j--;
            } else {
                i++;
            }
        }

        return [];
    }
}
