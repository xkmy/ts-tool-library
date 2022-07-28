/**
 * 提取对象中指定keys的子集
 * @param obj 数据源
 * @param keys 提取的keys
 */
const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys.reduce((acc, currentKey) => {
    if (obj[currentKey]) {
      acc[currentKey] = obj[currentKey]
    }
    return acc
  }, {} as T)

export default pick
