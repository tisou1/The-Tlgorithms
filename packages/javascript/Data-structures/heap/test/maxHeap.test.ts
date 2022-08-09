import { describe, it, expect, beforeEach } from 'vitest'
import { BinaryHeap } from '../maxHeap'

describe('Maxheap', () => {

  let heap
  beforeEach(() => {
    heap = new BinaryHeap()
  })
1n
  it('size', () => {
    expect(heap.size).toMatchInlineSnapshot('0')
  })

})
