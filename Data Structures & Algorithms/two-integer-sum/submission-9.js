class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const newArray = nums.map((val, idx) => [val, idx]);
        newArray.sort((a, b) => a[0] - b[0]);

        console.log(newArray)

        let i = 0, j = newArray.length - 1;

        while (i < j) {
            if (newArray[i][0] + newArray[j][0] === target) {
                return [newArray[i][1], newArray[j][1]];
            } else if (newArray[i][0] + newArray[j][0] > target) {
                j--;
            } else {
                i++;
            }
        }

        return [0, 0];
    }
}
