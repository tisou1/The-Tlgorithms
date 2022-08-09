/**
 * 大顶堆
 */

export class BinaryHeap<T>{

  heap: T[]

  constructor() {
    this.heap = []
  }

  inser(value: T) {
    this.heap.push(value)
    //调整
    this.heapify()
  }

  get size() {
    return this.heap.length
  }


  //TODO
  heapify(){}
}