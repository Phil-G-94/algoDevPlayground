// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {

    /**
     *
     * automatically generate two Stacks
     * whenever we create a new instance of our Queue class
     *
     */

    constructor() {
        this.stackA = new Stack();
        this.stackB = new Stack();
    }



    add(record) {

        this.stackA.push(record);

    }

    remove() {

        /**
         *
         * while there are still elements in the first stack
         * keep popping them out
         * and adding them to stackB
         *
         * less verbose: this.stackB.push(this.stackA.pop())
         *
         */

        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }
        // store a ref to the first record that we added to stackA
        // will be the last record in stackB following the above loop
        // allowing us to use pop();
        const record = this.stackB.pop();


        // push all remaining records back to stackA
        // preserving the order they were added in
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }

        // return the first record we pushed into the stack
        return record;
    }

    peek() {

        // move all records from stackA => stackB
        // meaning the second record we added will be the last index of StackB's data array
        while (this.stackA.peek()) {
            this.stackB.push(this.stackA.pop());
        }

        // grab a reference to that record
        const record = this.stackB.peek();

        // move all records back to stackA from stackB
        while (this.stackB.peek()) {
            this.stackA.push(this.stackB.pop());
        }

        // return it
        return record;
    }

}

const q = new Queue();

q.add(1);
q.add(2);
q.add(3);
q.add(4);

console.log(q.peek()); // 1 => the first one to remove
console.log(q.remove()); // 1
console.log(q.peek()); // 2 => the next one to remove
console.log(q.remove()); // 2
console.log(q.peek()); // 3 => the next one to remove
console.log(q.remove()); // 3
console.log(q.peek()); // 4 => the next one to remove
console.log(q.remove()); // 4


module.exports = Queue;
