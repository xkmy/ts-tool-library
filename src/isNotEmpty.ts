/**
 * 判断值是否为空
 * @param val val可为任意类型参数
 */
const isNotEmpty = (val: unknown): boolean => {
  if (Array.isArray(val)) {
    if (val.length !== 0) {
      return true
    }
    return false
  }

  if (typeof val === 'object') {
    if (val && Object.keys(val).length !== 0) {
      return true
    }
    return false
  }

  if (val !== undefined && val !== null && val !== 'undefined' && val !== '') {
    return true
  }

  return false
}

export default isNotEmpty
