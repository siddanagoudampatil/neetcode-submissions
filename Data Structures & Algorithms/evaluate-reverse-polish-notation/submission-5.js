class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for (const c of tokens) {
            if (!['+', '-', '*', '/'].includes(c)) {
                stack.push(parseInt(c));
            } else {
                const b = stack.pop();
                const a = stack.pop();
                stack.push(this.calculate(a, b, c));
            }
            console.log(stack)
        }

        return stack[stack.length - 1];
    }

    calculate(a, b, op) {
        switch (op) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b < 0 ? Math.ceil(a / b) : Math.floor(a / b);
        }
        return a + b;
    }
}
