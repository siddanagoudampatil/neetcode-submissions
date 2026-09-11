class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const n = this.minStack.length;
            if (this.minStack[n - 1] >= val) {
                this.minStack.push(val);
            } else {
                this.minStack.push(this.minStack[n - 1]);
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.minStack.pop();
        return this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        const n = this.stack.length;
        return this.stack[n - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const n = this.minStack.length;
        return this.minStack[n - 1];
    }
}
