import { describe, it, expect, beforeEach } from 'vitest'
import { MinHeap } from '../minHeap'

describe('Maxheap', () => {

  let heap
  let arr = [2, 4, 10, 23, 43, 42, 39, 7, 9, 16, 85, 1, 51]
  beforeEach(() => {
    heap = new MinHeap(arr)
  })

  it('size', () => {
    expect(heap).toEqual({ 'heap': [1, 4, 2, 7, 16, 10, 39, 23, 9, 43, 85, 42, 51] })   // eslint-disable-line
  })

  it('check peek', () => {
    const minValue = heap.peek()
    expect(minValue).toEqual(1)
  })

  it('check min', () => {
    const minValue = heap.extractMin()

    expect(minValue).toEqual(1)
    expect(heap).toEqual({ 'heap': [2, 4, 10, 7, 16, 42, 39, 23, 9, 43, 85, 51] })      // eslint-disable-line
  })

  it('检查insert函数', () => {
    heap.insert(15)

    expect(heap).toEqual({ 'heap': [2, 4, 10, 7, 16, 15, 39, 23, 9, 43, 85, 51, 42] })  // eslint-disable-line
  })
})
