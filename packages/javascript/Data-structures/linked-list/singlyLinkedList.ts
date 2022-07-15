

export interface NodeT<T> {
  data: T
  next: NodeT<T> | null
}
class Node<T> {
  data: T
  next: NodeT<T> | null

  constructor(data: T){
    this.data = data
    this.next = null
  }
}

class LinkedList<T>{
  headNode: NodeT<T> | null
  length: number

  constructor() {
    this.headNode = null
    this.length = 0
  }

  //返回当前head指向的的节点和索引
  initiateNodeAndIndex() {
    return {
      currentNode: this.headNode,
      currentIndex: 0
    }
  }

  //大小
  size() {
    return this.length
  }

  //头指针指向的内容
  head() {
    return this.headNode?.data || null
  }

  //isEmpty
  isEmpty() {
    return this.length === 0
  }

  //添加
  addLast(element: T) {
    if(this.headNode === null) {
      return this.addFirst(element)
    }

    let { currentNode } = this.initiateNodeAndIndex()
    //循环找到链表的结尾
    while(currentNode?.next) {
      currentNode = currentNode.next
    }
    //创建新的节点
    const node = new Node(element)

    //插入新节点
    currentNode!.next = node as NodeT<T>
    this.length++
    return this.size()
  }

  //头部添加
  addFirst(element: T) {
    const node = new Node(element)
    node.next = this.headNode
    this.headNode = node as NodeT<T>
    this.length++
    return this.size()
  }

  //头部删除
  removeFirst() {
    const removeNode = this.headNode
    if(this.length > 0) {
      this.headNode = this.headNode!.next
      this.length--
    } 
    return removeNode
  }

  //尾部删除
  removeLast() {
    if(this.isEmpty())
      return null
    if(this.length === 1) {
      return this.removeFirst()
    }

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while(currentIndex !== this.length - 2) {
      currentIndex++
      currentNode = currentNode!.next
    }

    const removeNode = currentNode?.next
    currentNode!.next = null
    return removeNode?.data
  }


  //删除特定元素
  remove(element: T) {
    if(this.isEmpty())
      return null
    let { currentNode } = this.initiateNodeAndIndex()
    let removeNode: NodeT<T> | null = null
    //查看头指针是否是待删除元素
    if(currentNode?.data === element) {
      return this.removeFirst()
    }
    //循环遍历
    while(currentNode?.next) {
      if(currentNode.next.data === element) {
        removeNode = currentNode.next
        currentNode.next = currentNode.next.next
        this.length--
        break
      }
      //移动指针
      currentNode = currentNode.next
    }
    return removeNode?.data || null
  }

  //查找特定元素
  indexOf(element: T) {
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()

    while(currentNode) {
      if(currentNode.data === element) {
        return currentIndex
      }
      currentNode = currentNode.next
      currentIndex++
    }
    return -1
  }

  //返回索引出的元素
  elementAt(index: number) {
    if(index > this.length || index < 0) 
      throw new RangeError('越界了')
    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    while(currentIndex < index) {
      currentIndex++
      currentNode = currentNode!.next
    }
    return currentNode?.data
  }

  //在特定位置插入元素
  addAt(index: number, element: T){
    if(index > this.length || index < 0) {
      throw new RangeError('越界了')
    }

     //头部直接插入
    if(index === 0) return this.addFirst(element)
     //尾部插入
    if(index === this.length)  return this.addLast(element)

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()
    const node = new Node(element)

    while(currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode!.next
    }

    const temNode = currentNode?.next
    currentNode!.next = node
    node.next = temNode!
    this.length++
    return this.size()
  }

  //删除特定位置
  removeAt(index: number) {
    if(index > this.length || index < 0) {
      throw new RangeError('越界了')
    }

    let { currentIndex, currentNode } = this.initiateNodeAndIndex()

    while(currentIndex !== index - 1) {
      currentIndex++
      currentNode = currentNode!.next
    }
    const removeNode = currentNode?.next
    currentNode!.next = removeNode!.next
    this.length--
    return removeNode?.data 
  }

  //清除
  clean() {
    this.headNode = null
    this.length = 0
  }

  //toArray
  get() {
    const list: T[] = []
    let { currentNode } = this.initiateNodeAndIndex()
    while(currentNode) {
      list.push(currentNode.data)
      currentNode = currentNode.next
    }

    return list
  }


  //可迭代对象,可用for of ...直接遍历
  itertor() {
    let { currentNode } = this.initiateNodeAndIndex()
    if( currentNode === null) return -1

    const iterate = function *(){
      while(currentNode) {
        yield currentNode.data
        currentNode = currentNode.next
      }
    }
    return iterate()
  }

  log() {
    console.log(JSON.stringify(this.headNode, null, 2))
  }
}

export { Node, LinkedList }