import { Node } from './singlyLinkedList'
import type { NodeT } from './singlyLinkedList'

class SinglyCircularLinkedList<T = unknown> {
  headNode: NodeT<T> | null 
  length: number
  constructor() {
    this.headNode = null
    this.length = 0
  }

  size = () => this.length

  head = () => this.headNode?.data || null

  isEmpty = () => this.size() === 0

  initiateNodeAndIndex() {
    return {
      currentNode: this.headNode,
      currentIndex: 0
    }
  }

  //获取元素
  getElementAt(index: number) {
    if(this.length !== 0 && index >= 0 && index <= this.length){
      let { currentNode } = this.initiateNodeAndIndex()
      //可以只用index来作为判断依据
      for(let i=0; i< index && currentNode!==null; i++){
        currentNode = currentNode.next
      }
      return currentNode
    }

    return undefined
  }
  //头部插入元素
  addAtFirst(data: T) {
    const node = new Node(data)
    node.next = this.headNode
    this.headNode = node
    this.length++

    return this.length
  }

  //尾部插入
  addAtLast(data: T) {
    //空的,就直接在头部进行插入
    if(!this.headNode) {
      return this.addAtFirst(data)
    }

    const node = new Node(data)

    //获取最后一个元素
    const currentNode = this.getElementAt(this.length - 1)
    currentNode!.next = node
    node.next = this.headNode
    this.length++
    return this.length
  }

  insertAt(index: number, data: T) {
    if(index === 0) {
      return this.addAtFirst(data)
    }
    if(index === this.length){
      return this.addAtLast(data)
    }
    if(index < 0 || index > this.length)
      throw new RangeError('越界了')

    //生成节点
    const node = new Node(data)
    const previousNode = this.getElementAt(index - 1)
    node.next = previousNode!.next
    previousNode!.next = node
    this.length++
    return this.length
  }

  indexOf(data: T) {
    let { currentNode, currentIndex } = this.initiateNodeAndIndex()

    while(currentNode) {
      if(currentNode.data === data) {
        return currentIndex
      }
      currentIndex++

      currentNode = currentNode.next
    }

    return -1
  }

  //尾部移除
  remove () {
    if(this.isEmpty()) return null
    if(this.length === 1) {
      let data = this.headNode?.data
      this.headNode = null
      this.length--
      return data || null
    }
    const secondLastNode = this.getElementAt(this.length - 2)
    const removeedNode = secondLastNode?.next
    secondLastNode!.next = this.headNode
    this.length--
    return removeedNode?.data || null
  }
  //头部移除
  removeFirst() {
    if (this.isEmpty()) return null
    const removedNode = this.headNode
    if (this.length === 1) {
      this.clear()
      return removedNode!.data
    }
    const lastNode = this.getElementAt(this.length - 1)
    this.headNode = this.headNode!.next
    lastNode!.next = this.headNode
    this.length--
    return removedNode!.data || null
  }

  removeAt(index) {
    if(this.isEmpty()) return null
    if(index === 0) return this.removeFirst()
    if(index === this.length) return this.remove()
    if(index < 0 && index > this.length) return null

    const previousNode = this.getElementAt(index - 1)
    const currentNode = previousNode?.next
    previousNode!.next = currentNode!.next
    this.length--
    return currentNode?.data || null
  }

  removeData(data: T) {
    if(this.isEmpty()) return null
    const index = this.indexOf(data)
    return this.removeAt(index)
  }

  printData(output = (value: any) => console.log(value)) {
    let {currentIndex, currentNode } = this.initiateNodeAndIndex()

    while(currentIndex < this.length) {
      output(currentNode?.data)
      //指针后移
      currentNode = currentNode!.next
      currentIndex++
    }
  }

  get() {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const list: T[] = []
    while(currentIndex < this.length && currentNode) {
      list.push(currentNode!.data)
      currentNode = currentNode!.next
      currentIndex++
    }

    return list
  }


  clear() {
    this.length = 0
    this.headNode = null
  }
}

export { SinglyCircularLinkedList }