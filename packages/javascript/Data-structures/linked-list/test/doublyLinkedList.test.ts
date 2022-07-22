import { describe, it, expect, beforeEach } from 'vitest'
import { DoublyLinkedList } from '../doublyLinkedList'

describe('check DoublyLinkedList', () => {
  let list
  beforeEach(() => {
    list = new DoublyLinkedList<unknown>()
  })

  it('check size', () => {
    expect(list.size()).toBe(0)
  })

  it('check append', () => {
    expect(list.append(11)).toBe(1)
    expect(list.append(22)).toBe(2)
    expect(list.append(33)).toBe(3)
    expect(list.toArray()).toEqual([11,22,33])
  })

  it('check getElementAt', () => {
    expect(list.append(11)).toBe(1)
    expect(list.append(22)).toBe(2)
    expect(list.append(33)).toBe(3)

    expect(list.getElementAt(1)).toMatchSnapshot()
  })

  it('check insert', () => {
    expect(list.append(10)).toBe(1)
    expect(list.append(20)).toBe(2)
    expect(list.append(30)).toBe(3)
    expect(list.insert(1,333)).toEqual(4)
    expect(list.insert(3, 444)).toEqual(5)
    expect(list.toArray()).toEqual([10, 333, 20, 444, 30])
    expect(list.toArray()).toMatchInlineSnapshot(`
      [
        10,
        333,
        20,
        444,
        30,
      ]
    `)
  })
})