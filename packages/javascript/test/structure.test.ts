import {it, expect, describe} from 'vitest'
import Stack  from '../Data-structures/Stack'


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

