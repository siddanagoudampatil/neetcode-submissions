class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const rec = () => {
            const ops = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '/': (a, b) => Math.trunc(a / b),
                '*': (a, b) => a * b
            }

            const token = tokens.pop();
            if (['+', '-', '/', '*'].includes(token)) {
                const op2 = rec();
                const op1 = rec();
                return ops[token](op1, op2);
            }

            return Number(token);
        }

        return rec();
    }
}
