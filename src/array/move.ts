const swapLocation = <T>(arr: T[], index1: number, index2: number) => {
  arr[index1] = arr.splice(index2, 1, arr[index1])[0]
  return arr
}

/**
 * 下移数组元素
 */
const indexDown = <T>(arr: T[], index: number) => {
  const length = arr.length
  if (index + 1 !== length) {
    return swapLocation(arr, index, index + 1)
  }
}

/**
 * 上移数组元素
 */
const indexUp = <T>(arr: T[], index: number) => {
  if (index !== 0) {
    return swapLocation(arr, index, index - 1)
  }
}

/**
 * 元素置顶,直接改变原数组
 */
const indexTop = <T>(ary: T[], index: number) => {
  if (index !== 0) {
    ary.unshift(ary.splice(index, 1)[0])
  }
  return ary
}

/**
 * 元素置底
 * @param ary
 * @returns
 */
const toDown = <T>(ary: T[], index: number) => {
  ary.push(ary[index])
  ary.splice(index, 1)
  return ary
}

export { indexDown, indexUp, indexTop, toDown }
