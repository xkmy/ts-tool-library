/**
 * 深拷贝
 * @param obj 数组或对象
 */

const deepClone = <T>(obj: any) => {
  if (!obj) return
  const clone = { ...obj }
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  )

  return Array.isArray(obj) && obj.length
    ? (clone.length = obj.length) && Array.from(clone as Array<T>)
    : Array.isArray(obj)
    ? Array.from(obj)
    : clone
}

export default deepClone
