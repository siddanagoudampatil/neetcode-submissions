class MinStack {
    constructor() {
        this.stack = [];
        this.min = Infinity;
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length === 0) {
            this.stack.push(0);
            this.min = val;
        } else {
            this.stack.push(val - this.min);
            this.min = Math.min(this.min, val);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) return;
        const popVal = this.stack.pop();
        if (popVal < 0) {
            this.min = this.min - popVal;
        }
    }

    /**
     * @return {number}
     */
    top() {
        const topVal = this.stack[this.stack.length - 1];
        return topVal > 0 ? topVal + this.min : this.min;
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min;
    }
}
