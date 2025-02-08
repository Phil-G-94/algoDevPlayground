/**
 *
 * stack implementation - to be used for Queue class in index.js
 *
 */

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;