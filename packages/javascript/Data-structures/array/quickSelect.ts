

/**
 * 寻找k个最小数的算法
 * @param items  带寻找的数组
 * @param kth 
 * @returns 
 */


export function quickSelect<T>(items: T[], kth: number) {
  if(kth < 1 || kth > items.length) {
    throw new RangeError('Index Out of Bound')
  }

  return randomizedSelect<T>(items, 0, items.length - 1, kth)
}

function randomizedSelect<T>(items: T[], left: number, right: number, i: number): T{
  if(left === right) 
    return items[left]

  const pivotIndex = randomizedPartition(items, left, right)
  const k = pivotIndex - left + 1

  if(i === k) return items[pivotIndex]
  if(i < k) return randomizedSelect(items, left, pivotIndex - 1, i)

  return randomizedSelect(items, pivotIndex + 1, right,  i - k)
}

function randomizedPartition(items, left, right):number {
  const rand = getRandomInt(left, right)
  swap(items, rand, right)
  return partition(items, left, right) 
}

//交换逻辑
function partition(items, left, right) {
  const x = items[right]
  let pivoIndex = left - 1

  for(let j = left; j < right; j++) {
    if(items[j] <= x) {
      pivoIndex++
      swap(items, pivoIndex, j)
    }
  }

  swap(items, pivoIndex + 1, right)

  return pivoIndex + 1
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1 )) + min
}

function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]]
}