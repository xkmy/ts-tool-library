/**
 * 判断值是否为空
 * @param val val可为任意类型参数(支持对象,数组等)
 */
const isEmpty = (val: unknown): boolean => {
  if (Array.isArray(val) && val.length === 0) {
    return true
  }

  if (typeof val === 'object') {
    if (!val || Object.keys(val).length === 0) {
      return true
    }
    return false
  }

  if (val === undefined || val === null || val === 'undefined' || val === '') {
    return true
  }

  return false
}

export default isEmpty
