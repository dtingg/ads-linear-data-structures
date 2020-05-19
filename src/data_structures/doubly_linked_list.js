class DLLNode {
  constructor({ element = undefined, next = this, prev = this, isSentinel = false }) {
    this.element = element;
    this.next = next;
    this.prev = prev;
    this._active = !isSentinel;
  }

  remove() {
    if (this._active) {
      this.prev.next = this.next;
      this.next.prev = this.prev;
      this._active = false;
      return this.element;
    }
  }
}

class DoublyLinkedList {
  constructor(Node = DLLNode) {
    this.Node = Node;
    this._sentinel = new this.Node({ isSentinel: true });
    this.total = 0;
  }

  _head() {
    return this._sentinel.next;
  }

  _tail() {
    return this._sentinel.prev;
  }

  insertHead(element) {
    const newHead = new DLLNode({ element: element, next: this._sentinel.next, prev: this._sentinel });
    const oldHead = this._sentinel.next;

    this._sentinel.next = newHead;
    oldHead.prev = newHead;

    this.total += 1;

    return newHead;
  }

  insertTail(element) {
    const newTail = new DLLNode({ element: element, next: this._sentinel, prev: this._sentinel.prev });
    const oldTail = this._sentinel.prev;
    
    this._sentinel.prev = newTail;
    oldTail.next = newTail;

    this.total += 1;
  }

  removeHead() {
    if (this.total === 0) {
      return undefined;
    } else {
      this.total -= 1;
      return this._sentinel.next.remove();
    }
  }

  removeTail() {
    if (this.total === 0) {
      return undefined;
    } else {
      this.total -= 1;
      return this._sentinel.prev.remove();
    }
  }

  remove(node) {
    const removed = node.remove();

    if (removed !== undefined) {
      this.total -= 1;
    } 
      
    return removed;
  }

  forEach(callback) {
    let currentNode = this._sentinel;

    for (let i = 0; i < this.total; i += 1) {
      currentNode = currentNode.next;
      callback(currentNode.element, i, this);
    }
  }

  count() {
    return this.total;
  }
}

export default DoublyLinkedList;