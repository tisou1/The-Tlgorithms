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
  
  //尾部添加元素
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
  //指定位置插入节点,
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


  removeAt(index: number) {

    //针对indexwei 0 和 this.length的情况可以做出优化
    if(index >= 0 && index < this.length) {
      let current = this.head
      //开始位置
      if(index === 0) {
        this.head = current!.next
        //如果只有一个节点
        if(this.length === 1) {
          this.tail = null
        } else {
          this.head!.prev = null
        }
      
      } else if(index === this.length - 1){
        current = this.tail
        this.tail = current!.prev
        this.tail!.next = null
      } else {
        //获取目标元素
        const currentNode = this.getElementAt(index)

        let previousNode = currentNode?.prev

        previousNode!.next = currentNode!.next
        currentNode!.next!.prev = previousNode  as DoubleNode<T>

        current =  currentNode
      }

      this.length--
      return current?.data
    }
  }


  indexOf(data: T) {
    let current = this.head
    let index = -1

    while(current) {
      if(data === current.data)
        return ++index

      index++
      current = current.next
    }

    return -1
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