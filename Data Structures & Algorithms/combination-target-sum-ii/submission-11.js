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

            for (let j = i; j < candidates.length; j++) {
                if (j > i && candidates[j] === candidates[j - 1]) {
                    continue;
                }

                if (sum + candidates[j] > target) {
                    break;
                }

                subset.push(candidates[j]);
                dfs(j + 1, sum + candidates[j]);
                subset.pop();
            }
        }

        dfs(0, 0);

        return res;
    }
}
