class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort();
        const res = [];
        const subSet = [];

        const dfs = (i, sum) => {
            if (sum === target) {
                res.push([...subSet]);
                return;
            }

            if (sum > target || i >= candidates.length) {
                return;
            }

            subSet.push(candidates[i]);
            dfs(i + 1, sum + candidates[i]);
            subSet.pop();

            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }
            dfs(i + 1, sum);
        };

        dfs(0, 0);

        return res;
    }
}
