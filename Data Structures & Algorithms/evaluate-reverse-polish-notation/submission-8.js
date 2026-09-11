class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        for (const t of tokens) {
            if ("/*+-".includes(t)) {
                const b = stack.pop();
                const a = stack.pop();
                let val = a + b;
                if (t === "/") {
                    val = Math.trunc(a / b);
                } else if (t === "*") {
                    val = a * b;
                } else if (t === "-") {
                    val = a - b;
                }
                stack.push(val);
            } else {
                stack.push(parseInt(t));
            }
        }
        return stack.pop();
    }
}
