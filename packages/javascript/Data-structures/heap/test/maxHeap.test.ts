import { describe, it, expect, beforeEach } from 'vitest'
import { BinaryHeap } from '../maxHeap'

describe('Maxheap', () => {

  let heap
  beforeEach(() => {
    heap = new BinaryHeap()
  })

  it('size', () => {
    expect(heap.size).toMatchInlineSnapshot('0')
    expect(heap.empty()).toBe(0)
    
    expect(heap.insert([1])).toBe(1)
    heap.insert([4])
    heap.insert([3])
    heap.insert([6])
    heap.insert([1])
    heap.insert([8])
    heap.insert([2])
    expect(heap.extractMax()).toMatchInlineSnapshot(`
      [
        8,
      ]
    `)
  })

})
