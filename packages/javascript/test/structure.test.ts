import {it, expect, describe} from 'vitest'
import Stack  from '../Data-structures/Stack'
import Queue from '../Data-structures/queue'


describe('Stack', () => { 
  const stack = new Stack()
  it('stack push', () => {
    stack.push(1)
    expect(stack.length).toBe(1)
    expect(stack).toMatchInlineSnapshot(`
      Stack {
        "stack": [
          1,
        ],
        "top": 1,
      }
    `)
  })

  it('stack pop', () => {
    stack.push(2)
    let pop = stack.pop()
    expect(pop).toBe(2)
    expect(stack.length).toEqual(1)
  })

  it('stack peak', () => { 
    stack.push(333)
    console.log(stack)

    expect(stack.peak).toBe(333)
  })
})


interface DataT {
  name?: string,
  id: string
}
describe('queue', () => {
  const queue = new Queue<DataT>()
  it('enqueue', () => {
    queue.enqueue({
      name: 'siry',
      id: '1'
    })
    expect(queue.length).toBe(1)
    expect(queue.toArray()).toMatchInlineSnapshot(`
      [
        {
          "id": "1",
          "name": "siry",
        },
      ]
    `)
  })

  it('dequeue', () => {
   const pop = queue.dequeue()
   expect(queue.length).toBe(0)
   expect(pop).toEqual(  {
    "id": "1",
    "name": "siry",
    })
  })
})
/**
 * 冠军在GP
 * 勇士在TT
 */