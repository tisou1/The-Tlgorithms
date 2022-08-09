
export class MinHeap<T = unknown> {

  heap: T[]
  constructor(array: T[]) {
    this.heap = this.initializeHeap(array)
  }

  initializeHeap(array: T[]) {
    //startingParent代表最后一个索引（===array.length-1）的父级。
    const startingParent = Math.floor((array.length - 2) / 2 )
    //最后一个非叶子节点
    for(let curIdx = startingParent; curIdx >= 0; curIdx--) {
      this.skinDown(curIdx, array.length - 1, array)
    }
    return array
  }

  skinDown(curIndx: number, endIdx: number, heap: T[]) {
    //最后一个叶子结点
    let childOneIdx = curIndx * 2 + 1

    while(childOneIdx <= endIdx) {
      const childTwoIdx = childOneIdx + 1 < endIdx ? childOneIdx + 1 : -1 
      const swapIdx = childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]
          ? childTwoIdx 
          : childOneIdx

      if(heap[swapIdx] < heap[curIndx]) {
        this.swap(curIndx, swapIdx, heap)
        curIndx = swapIdx
        childOneIdx = curIndx * 2 + 1
      } else {
        return
      }
    }
  }


  bubbleUp(currIdx: number) {
    let parentIdx = Math.floor((currIdx -1) / 2)

    while(currIdx > 0 && this.heap[currIdx] < this.heap[parentIdx]){
      this.swap(currIdx, parentIdx, this.heap)
      currIdx = parentIdx
      parentIdx = Math.floor((currIdx - 1) / 2)
    }
  }

  peek() {
    return this.heap[0]
  }

  extractMin() {
    this.swap(0, this.heap.length - 1, this.heap)
    const min = this.heap.pop()
    this.skinDown(0, this.heap.length -1, this.heap)
    return min
  }

  insert(value: T) {
    this.heap.push(value)
    this.bubbleUp(this.heap.length - 1)
  }

  swap(x, y, heap) {
    [heap[x], heap[y]] = [heap[y], heap[x]]
  }
}