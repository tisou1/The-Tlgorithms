import { it, expect, describe } from 'vitest'
import { quickSelect } from '../quickSelect'

describe('快速选择低k个最小的数', () => {
  const arr = [1, 23, 56, 0, 789, 12, 764, 35]

  it('check', () => {
    expect(quickSelect(arr,5)).toBe(35)
    expect(quickSelect(arr,1)).toBe(0)
    expect(quickSelect(arr,3)).toBe(12)
  })
})