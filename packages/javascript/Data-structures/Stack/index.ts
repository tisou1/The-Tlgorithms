



export default class Stack<T> {
  stack: T[]
  top: number
  constructor() {
    this.stack = []
    this.top = 0
  }

  push(newValue: T) {
    this.stack.push(newValue)
    this.top += 1
  }

  pop() {
    if(this.top !== 0) {
      this.top -= 1
      return this.stack.pop()
    }
    throw new Error('Stack Underflow')
  }

  get length():number {
    return this.top
  }

  get isEmpty():boolean {
    return this.top === 0
  }

  get peak() {
    if(this.top !== 0)
      return this.stack[this.stack.length - 1]
    return null
  }

  
}