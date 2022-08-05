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
    expect(ls).toMatchInlineSnapshot(`
      LinkedList {
        "headNode": Node {
          "data": {
            "age": 55,
            "id": 1,
            "name": "js",
          },
          "next": Node {
            "data": {
              "age": 14,
              "id": 2,
              "name": "lodash",
            },
            "next": null,
          },
        },
        "length": 2,
      }
    `)
  })

  it('toArray', () => {
    const list = ls.get()
    expect(list[0].id).toBe(1)
  })

  it.only('iterator', () => {
    const ls = new LinkedList()
    ls.addFirst(randomGeneratePerson())
    ls.addFirst(randomGeneratePerson())
    ls.addFirst(randomGeneratePerson())

    // for(const element of ls.itertor()){
    //   console.log(element)
    // }
    expect(ls.get()).toMatchInlineSnapshot(`
      [
        {
          "age": 23,
          "id": 3,
          "name": "js",
        },
        {
          "age": 0,
          "id": 2,
          "name": "vue",
        },
        {
          "age": 93,
          "id": 1,
          "name": "angular",
        },
      ]
    `)
  })
})