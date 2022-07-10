
interface Node<T = unknown> {
  next: Node<T> | null,
  data: T
}


export default class Queue<T> {
  

  #size: number //私有属性
  head: Node<T> | null
  tail: Node<T> | null
  constructor() {
    this.head = null
    this.tail = null
    this.#size = 0

    //返回一个封闭的对象(正常情况下对象是可扩展的)
    return Object.seal(this)
  }

  //返回queue的长度
  get length() {
    return this.#size
  }

  //入队
  enqueue(data: T) {
    const node = { data, next: null }
    if(!this.head && !this.tail) {
      this.head = this.tail = node
    } else {
      this.tail!.next = node
      this.tail = node
    }

    return ++this.#size
  }

  //出队

  dequeue() {
    this.emptyMessage()

    const firstData = this.peakFirst()

    //指针后移
    this.head = this.head!.next

    if(!this.head) {
      this.tail = null
    }

    this.#size--

    return firstData
  }

  //第一个
  peakFirst() {
    this.emptyMessage()

    return this.head?.data
  }

  peakLast() {
    this.emptyMessage()

    return this.tail?.data
  }

  toArray() {
    const array: T[] = []
    let node = this.head

    while(node) {
      array.push(node.data)
      node = node.next
    }

    return array
  }

  isEmpty() {
    return this.length === 0
  }

  emptyMessage() {
    if(this.isEmpty()) {
      throw new Error('队列为空')
    }
  }
}