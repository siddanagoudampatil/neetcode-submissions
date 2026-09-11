class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const wordsSet = new Set(wordDict);
        const dp = new Map();
        dp.set(s.length, true);

        const dfs = (i) => {
            if (dp.has(i)) {
                return dp.get(i);
            }

            for (let j = i; j < s.length; j++) {
                if (wordsSet.has(s.substring(i, j + 1))) {
                    if (dfs(j + 1)) {
                        dp.set(i, true);
                        return true;
                    }
                }
            }

            dp.set(i, false);
            return false;
        }

        return dfs(0);
    }
}
