class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const close = [']', '}', ')'];

        const getOpen = (c) => {
            if (c === ']') return '[';
            else if (c === "}") return '{';
            else return '(';
        }

        let i = 0;
        while (i < s.length) {
            if (close.includes(s[i])) {
                if (stack.length === 0 || stack[stack.length - 1] !== getOpen(s[i])) {
                    return false;
                }
                stack.pop();
            } else {
                stack.push(s[i]);
            }
            i++;
        }

        return stack.length === 0;
    }
}
