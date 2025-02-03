/* in contrast to queues, stacks follow first-in-last-out | last-in-first-out
*/

// push, pop, peek

class Stack {
    constructor() {
        this.data = [];
    }

    push(record) {
        this.data.push(record);
    }

    pop() {
        return this.data.pop(this.data.length - 1);
    }

    peek() {
        return this.data[this.data.length - 1];

    }

    print() {
        console.log(this.data);
    }
}

const stack = new Stack();

stack.push(1);
stack.push(2);

stack.print();

stack.peek();

module.exports = Stack;