import { SinglyCircularLinkedList }  from '../singlyCircularLinkedList'
import { describe, it, expect, beforeEach} from 'vitest'


describe('SinglyCircularLinkedList', () => {
  let list
  //当前上下文中的每个测试运行前被调用
  beforeEach(() => {
    list = new SinglyCircularLinkedList()
  })

  it('Check get', () => {
    expect(list.get()).toEqual([])
    expect(list.addAtFirst(1)).toEqual(1)
    expect(list.addAtFirst(2)).toEqual(2)
    expect(list.get()).toMatchSnapshot()
    expect(list.size()).toBe(2)
    expect(list.get()).toEqual([2,1])
  })

  it('check size', () => {
    expect(list.size()).toEqual(0)
    expect(list.addAtLast(1)).toEqual(1)
    expect(list.addAtLast(2)).toEqual(2)
    expect(list.size()).toBe(2)
  })

  it('check head', () => {
    expect(list.head()).toEqual(null)
    expect(list.addAtLast(1111)).toBe(1)
    expect(list.head()).toEqual(1111)
    list.clear()
    expect(list.head()).toEqual(null)
  })

  it('Check isEmpty', () => {
    expect(list.isEmpty()).toEqual(true)
    expect(list.addAtFirst('123')).toEqual(1)
    expect(list.isEmpty()).toEqual(false)
  })

  it('check getElementAt', () => {
    list.addAtLast(100)
    list.addAtLast(200)
    list.addAtLast(300)
    list.addAtLast(500)
    list.addAtLast(900)

    expect(list.getElementAt(1).data).toEqual(200)
    expect(list.getElementAt(2).data).toEqual(300)
  })

  it('check addAtFitst', () => {
    list.addAtLast(100)
    list.addAtLast(200)
    list.addAtLast(300)

    expect(list.get()).toEqual([100, 200, 300])
    list.addAtFirst(50)
    expect(list.get()).toEqual([50, 100, 200, 300])
  })

  it('check insert', () => {
    expect(list.insertAt(0, 100)).toEqual(1)
    expect(list.insertAt(0, 200)).toEqual(2)
    expect(list.insertAt(2, 300)).toEqual(3)

    expect(list.get()).toEqual([200, 100, 300])
  })

  it('check indexof', () => {
    list.addAtLast(100)
    list.addAtLast(200)
    list.addAtLast(300)

    expect(list.indexOf(200)).toBe(1)
    expect(list.indexOf(300)).toBe(2)
  })

  
})
