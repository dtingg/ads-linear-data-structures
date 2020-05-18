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
    const newHead = new DLLNode(element, this._sentinel.next, this._sentinel);    
    const oldHead = this._sentinel.next;

    this._sentinel.next = newHead;
    oldHead.prev = newHead;

    this.total += 1;
  }

  insertTail(element) {
    const newTail = new DLLNode(element, this._sentinel, this._sentinel.prev);
    const oldTail = this._sentinel.prev;
    
    this._sentinel.prev = newTail;
    oldTail.next = newTail;

    this.total += 1;
  }

  removeHead() {
  }

  removeTail() {
  }

  remove(node) {
  }

  forEach(callback) {
  }

  count() {
    return this.total;
  }
}

export default DoublyLinkedList;