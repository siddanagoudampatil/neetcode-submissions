class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];
        const operators = ['+', '-', '*', '/'];

        for (const char of tokens) {
            if (operators.includes(char)) {
                const rightOperand = stack.pop();
                const leftOperand = stack.pop();
                const res = this.calcHelper(leftOperand, rightOperand, char);
                stack.push(parseInt(res));
            } else {
                stack.push(parseInt(char));
            }
        }
        return stack.pop();
    }

    calcHelper(leftOperand, rightOperand, operator) {
        switch(operator) {
            case '+': return leftOperand + rightOperand;
            case '-': return leftOperand - rightOperand;
            case '*': return leftOperand * rightOperand;
            case '/': return leftOperand / rightOperand;
            default: return;
        }
    }
}
