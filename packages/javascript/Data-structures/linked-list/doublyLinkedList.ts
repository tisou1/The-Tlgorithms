import type { DoubleNode } from './types'

class Node<T> {
  data: T
  next: DoubleNode<T> | null
  prev: DoubleNode<T> | null
  constructor(element: T) {
    this.data = element
    this.next = this.prev = null
  }
}

class DoublyLinkedList<T> {
  length: number
  head: DoubleNode<T> | null
  tail: DoubleNode<T> | null
  constructor() {
    this.length = 0
    this.head = null
    this.tail = null
  }

  size = () => this.length
  
  //添加元素
  append(data: T) {
    const node = new Node(data)

    if(!this.head) {
      this.head = this.tail = node
    } else {
      node.prev = this.tail
      this.tail!.next = node
      this.tail = node
    }

    this.length++

    return this.size()
  }

  //获取元素
  getElementAt(index: number) {
    if(index >=0 && index <= this.length) {
      //正常范围值
      let currentNode = this.head
      let currentIndex = 0
      while(currentIndex < index) {
        currentNode = currentNode!.next
        currentIndex++
      }

      return currentNode
    } else {
      return null
    }
  }

  insert(index: number, data: T) {
    const node = new Node(data)
    //获取目标元素前一个
    const previousNode = this.getElementAt(index - 1)


    node.next = previousNode!.next
    previousNode!.next!.prev = node as DoubleNode<T>

    previousNode!.next = node
    node.prev = previousNode

    return ++this.length

  }

  // Convert list to array
  toArray () {
    const arr: T[] = []
    let current = this.head

    while (current) {
      arr.push(current.data)
      current = current.next
    }

    return arr
  }
}

export { DoublyLinkedList }