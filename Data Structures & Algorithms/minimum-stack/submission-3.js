class MinStack {
    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
    }

    /**
     * @return {void}
     */
    pop() {
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
        let min = Infinity;
        const n = this.stack.length;
        for (let i = 0; i < n; i++) {
            min = Math.min(min, this.stack[i]);
        }
        return min;
    }
}
