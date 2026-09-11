class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        let perms = [[]];

        for (const num of nums) {
            let newPerms = [];
            for (const p of perms) {
                for (let i = 0; i <= p.length; i++) {
                    const pCopy = p.slice();
                    pCopy.splice(i, 0, num);
                    newPerms.push(pCopy);
                }
            }
            perms = newPerms;
        }

        return perms;
    }
}
