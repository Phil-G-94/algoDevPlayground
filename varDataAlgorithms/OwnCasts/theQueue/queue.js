/*
    queues follow first-in-first-out principle
*/

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove(record) {
        return this.data.pop(record);
    }

    print() {
        console.log(this.data);
    }
}

const q = new Queue();

q.add("peanut");
q.add("cashew");
q.add("almond");
q.print();
q.remove("almond");
q.remove("cashew");
q.print();