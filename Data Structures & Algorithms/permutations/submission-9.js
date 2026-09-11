class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const inst = [];

        const backtrack = (mask) => {
            if (inst.length === nums.length) {
                res.push([...inst]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!(mask & (1 << i))) {
                    inst.push(nums[i]);
                    backtrack(mask | (1 << i));
                    inst.pop();
                }
            }
        }

        backtrack(0);

        return res;
    }
}
