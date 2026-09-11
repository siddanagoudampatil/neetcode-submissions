class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const res = [];

        const backtrack = (str, openParenCount, closeParenCount) => {
            if (str.length === 2 * n) {
                res.push(str);
                return;
            }

            if (openParenCount < n) {
                backtrack(str + "(", openParenCount + 1, closeParenCount);
            }

            if (closeParenCount < openParenCount) {
                backtrack(str + ")", openParenCount, closeParenCount + 1);
            }
        }

        backtrack("", 0, 0);
        
        return res;
    }
}
