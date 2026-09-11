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
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        const temp = [];
        let min = Infinity;

        while (this.stack.length) {
            const pop = this.stack.pop();
            min = Math.min(min, pop);
            temp.push(pop);
        }

        while (temp.length) {
            this.stack.push(temp.pop());
        }

        return min;
    }
}
