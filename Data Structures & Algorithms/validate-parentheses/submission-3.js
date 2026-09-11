class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for (const char of s) {
            if (['(', '{', '['].includes(char)) {
                stack.push(char);
            } else if (char === ')') {
                if (stack.length > 0 && stack[stack.length - 1] === '(') stack.pop();
                else return false
            } else if (char === '}') {
                if (stack.length > 0 && stack[stack.length - 1] === '{') stack.pop();
                else return false
            } else if (char === ']') {
                if (stack.length > 0 && stack[stack.length - 1] === '[') stack.pop();
                else return false
            }
        }

        return stack.length === 0;
    }
}
