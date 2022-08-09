import { describe, it, expect } from 'vitest'
import { LinkedList, Node } from '../singlyLinkedList'


interface Person {
  name: string
  age?: number
  id: number
}
let id = 0
let names = ['ts','js','react','vue','lodash','angular']
function randomGeneratePerson() {
  let len = names.length

  const name = names[Math.floor(Math.random()*len)]
  const age = Math.floor(Math.random() * 100)
  id++
  return {
    name,
    age,
    id
  }
}

describe('LinkedList', () => {
  const ls = new LinkedList<Person>()

  it('addFirst', () => {
    const temp1 = randomGeneratePerson()
    const temp2 = randomGeneratePerson()

    ls.addFirst(temp1)
    ls.addLast(temp2)
    expect(ls.size()).toBe(2)
  })
})