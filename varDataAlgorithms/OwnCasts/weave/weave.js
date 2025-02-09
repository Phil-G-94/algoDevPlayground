// --- Directions
// 1) Complete the task in weave/queue.js
// 2) Implement the 'weave' function.  Weave
// receives two queues as arguments and combines the
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.
// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'

const Queue = require("./queue");

const queueOne = new Queue();
queueOne.add("peanut");
queueOne.add("cashew");
queueOne.add("almond");


const queueTwo = new Queue();
queueTwo.add("berries");
queueTwo.add("cherries");
queueTwo.add("apples");
queueTwo.add("bananas");

const weave = (queueOne, queueTwo) => {
    const result = new Queue();

    // while either of the two queues still have a `last` index
    while (queueOne.peek() || queueTwo.peek()) {

        // if `last` index isn't undefined, add it to result
        if (queueOne.peek()) {
            result.add(queueOne.remove());
        }

        if (queueTwo.peek()) {

            result.add(queueTwo.remove());
        }

    };

    // return
    return result;

};


console.log(weave(queueOne, queueTwo));


module.exports = weave;