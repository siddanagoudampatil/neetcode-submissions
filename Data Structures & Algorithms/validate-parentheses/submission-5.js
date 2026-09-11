class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const closeOpenMap = {
            ')': '(',
            '}': '{',
            ']': '['
        }

        for (const c of s) {
            if (closeOpenMap[c]) {
                if (stack.length > 0 && stack[stack.length - 1] === closeOpenMap[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
