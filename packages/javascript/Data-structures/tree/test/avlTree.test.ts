import { describe, it, expect } from 'vitest'

import { AVLTree } from '../AVLTree'

describe('avlTree', () => {
  it('xxx', () => {
    /**
 * A Code for Testing the AVLTree
 */
    (function test() {
      const newAVL = new AVLTree()
      const size = Math.floor(Math.random() * 100)
      let uniques = 0
      let i, temp, j
      const array: any[] = []
      for (i = 0; i < size; i++) {
        temp = Math.floor(Math.random() * 100)
        if (newAVL.add(temp)) {
          uniques++
          array.push(temp)
        }
      }
      // console.log(`数组长度:${array.length}, ${newAVL}`)
      if (newAVL.size !== uniques) {
        throw new Error('elements not inserted properly')
      }
      const findTestSize = Math.floor(Math.random() * uniques)
      for (i = 0; i < findTestSize; i++) {
        j = Math.floor(Math.random() * uniques)
        if (!newAVL.find(array[j])) {
          throw new Error('inserted elements not found')
        }
      }
      const deleteTestSize = Math.floor(uniques * Math.random())
      for (i = 0; i < deleteTestSize; i++) {
        j = Math.floor(Math.random() * uniques)
        temp = array[j]
        if (newAVL.find(temp)) {
          if (!newAVL.remove(temp)) {
            throw new Error('delete not working properly')
          }
        }
      }
    })()
  })
})