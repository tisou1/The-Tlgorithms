


export default class Queue<T = unknown> {
  inputStack: T[]
  outputStack: T[]

  constructor() {
    this.inputStack = []
    this.outputStack = []
  }

  //入队
  enqueue(item: T) {
    this.inputStack.push(item)
  }

  //出队
  dequeue() {
    this.outputStack = []
    //将input数组的值推到output中
    while(this.inputStack.length > 0) {
      this.outputStack.push(this.inputStack.pop() as T)
    }

    if(this.outputStack.length > 0) {
      const top = this.outputStack.pop()
      this.outputStack = []

      while(this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop() as T)
      }
    
      return top
    }
  }

  //展示inpout中的元素
  listIn(output = value => console.log(value)){
    let i = 0
    while(this.inputStack.length > i) {
      output(this.inputStack[i])
      i++
    }
  }

  //展示output中的元素
  listOut(output = value => console.log(value)) {
    let i = 0
    while(this.outputStack.length > i) {
      output(this.outputStack[i])
      i++
    }
  }
}