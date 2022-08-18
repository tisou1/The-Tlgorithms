import { describe, it, expect } from 'vitest'
import { getMonthDays } from '../getMonthDats'

describe('check time-functions ', () => {
  it('check getMonthDays', () => {
    expect(getMonthDays(1)).toBe(31)
    expect(getMonthDays(2)).toBe(28)
    expect(getMonthDays(2,2020)).toBe(29)  //2020是闰年 2月29天
  })

})