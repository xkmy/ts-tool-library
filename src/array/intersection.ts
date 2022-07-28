/**
 * 求两数组的交集(一维)
 * @param a 数组a
 * @param b 数组b
 */
const intersection = <T>(a: T[], b: T[]) => {
  const s = new Set(b)
  return a.filter(x => s.has(x))
}

export default intersection