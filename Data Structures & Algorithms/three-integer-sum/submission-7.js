class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        nums.sort((a, b) => a - b);
        const res = [];

        let i = 0;
        while (i < nums.length) {
            const remain = 0 - nums[i];

            let j = i + 1,
                k = nums.length - 1;

            while (j < k) {
                const sum = nums[j] + nums[k];

                if (sum === remain) {
                    res.push([nums[i], nums[j], nums[k]]);
                    while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                        j++;
                    }
                    j++;
                    while (k - 1 > 0 && nums[k] === nums[k - 1]) {
                        k--;
                    }
                    k--;
                } else if (sum < remain) {
                    while (j + 1 < nums.length && nums[j] === nums[j + 1]) {
                        j++;
                    }
                    j++;
                } else {
                    while (k - 1 > 0 && nums[k] === nums[k - 1]) {
                        k--;
                    }
                    k--;
                }
            }
            while (i + 1 < nums.length && nums[i] === nums[i + 1]) {
                i++;
            }
            i++;
        }

        return res;
    }
}
