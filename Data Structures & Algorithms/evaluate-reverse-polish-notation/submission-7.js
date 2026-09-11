class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        while (tokens.length > 1) {
            for (let i = 0; i < tokens.length; i++) {
                if ("*/+-".includes(tokens[i])) {
                    const a = parseInt(tokens[i - 2]);
                    const b = parseInt(tokens[i - 1]);
                    const val = this.calculate(a, b, tokens[i]);

                    tokens.splice(i - 2, 3, val.toString());
                    break;
                }
            }
        }

        return parseInt(tokens[0]);
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
                return Math.trunc(a / b);
        }
        return a + b;
    }
}
