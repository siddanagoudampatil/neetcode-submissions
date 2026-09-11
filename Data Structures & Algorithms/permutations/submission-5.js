class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        if (nums.length === 0) {
            return [[]];
        }

        const permutes = this.permute(nums.slice(1));

        const res = [];
        for (const p of permutes) {
            for (let i = 0; i <= p.length; i++) {
                const pCopy = p.slice();
                pCopy.splice(i, 0, nums[0]);
                res.push(pCopy);
            }
        }

        return res;
    }
}
 