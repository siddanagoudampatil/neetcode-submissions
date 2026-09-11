class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        const n = this.stack.length;
        if (n === 0) {
            this.stack.push([val, val]);
        } else {
            this.stack.push([val, Math.min(this.stack[n - 1][1], val)]);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        return this.stack.pop()[0];
    }

    /**
     * @return {number}
     */
    top() {
        const n = this.stack.length;
        return this.stack[n - 1][0];
    }

    /**
     * @return {number}
     */
    getMin() {
        const n = this.stack.length;
        return this.stack[n - 1][1];
    }
}
