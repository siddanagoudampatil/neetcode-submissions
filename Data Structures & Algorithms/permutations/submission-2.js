class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const perm = [];
        const pick = new Array(nums.length).fill(false);

        const backtrack = () => {
            if (perm.length === nums.length) {
                res.push([...perm]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                if (!pick[i]) {
                    perm.push(nums[i]);
                    pick[i] = true;
                    backtrack();
                    perm.pop();
                    pick[i] = false;
                }
            }
        }

        backtrack();

        return res;
    }
}
