class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        candidates.sort((a, b) => a - b);
        const res = [];
        const subset = [];

        const dfs = (i, sum) => {
            if (sum === target) {
                res.push([...subset]);
                return;
            }

            if (i >= candidates.length || sum > target) {
                return;
            }

            subset.push(candidates[i]);
            dfs(i + 1, sum + candidates[i]);

            subset.pop();

            while (i + 1 < candidates.length && candidates[i] === candidates[i + 1]) {
                i++;
            }

            dfs(i + 1, sum);
        };

        dfs(0, 0);

        return res;
    }
}
