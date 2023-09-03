// basic implementation
class Queue {
  constructor() {
    this.queue = [];
  }

  size() {
    return this.queue.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(item) {
    this.queue.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return "queue underflow";
    }
    return this.queue.shift();
  }

  front() {
    if (this.isEmpty()) {
      return "queue underflow";
    }
    return this.queue[0];
  }
  display() {
    console.log(this.queue);
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
myQueue.enqueue(3);
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
console.log(myQueue.dequeue());
myQueue.enqueue(11);
myQueue.enqueue(21);
myQueue.enqueue(31);
console.log(myQueue.front());
myQueue.display();
