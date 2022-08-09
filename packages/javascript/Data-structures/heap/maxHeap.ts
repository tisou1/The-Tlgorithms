/**
 * 大顶堆
 */

export class BinaryHeap<T>{

  heap: T[][]

  constructor() {
    this.heap = []
  }

  get size() {
    return this.heap.length
  }

  empty = () => this.heap.length

  print = () => this.heap

  insert(value: T[]) {
    this.heap.push(value)
    //调整
    this.heapify()
    return this.size
  }




  // 重新排序
  heapify(){
    let index = this.size - 1

    while(index > 0) {
      const element = this.heap[index]
      //最后一个非叶子节点
      const parentIndex = Math.floor((index - 1) / 2)
      const parent = this.heap[parentIndex]

      if(parent[0] >= element[0]) break
      this.heap[index] = parent
      this.heap[parentIndex] = element
      index = parentIndex
    }
  }

  //取出最大的
  extractMax() {
    const max = this.heap[0]
    const tmp = this.heap.pop()
    if(!this.empty()) {
      this.heap[0] = tmp as T[]
      this.sinkDown(0)
    }
    return max
  }

  //在提取后 恢复平衡
  sinkDown(index) {
    const left = 2 * index + 1
    const right = 2 * index + 2
    let largest = index
    const length = this.size

    if(left < length && this.heap[left][0] > this.heap[largest][0]) {
      largest = left
    }
    if(right < length && this.heap[right][0] > this.heap[largest][0]) {
      largest = right
    }

    if(largest !== index) {
      [this.heap[largest], this.heap[index]] = [this.heap[index], this.heap[largest]]
      this.sinkDown(largest)
    }
  }
}