class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        const map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz"
        }

        const res = [];
        const dfs = (i, str) => {
            if (i >= digits.length) {
                if (str !== "") {
                    res.push(str);
                }
                return;
            }

            const temp = map[digits[i]];
            for (let j = 0; j < temp.length; j++) {
                dfs(i + 1, str + temp[j]);
            }
        }

        dfs(0, "");

        return res;
    }
}
