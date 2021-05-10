/**
 * 去除数组中重复的对象
 * @param arr 原数组
 * @param key 去重依据的key值
 */
const uniqueArrayObject = <T>(arr: T[], key: keyof T): T[] => {
  return arr.reduce((acc: T[], cur) => {
    const keys = acc.map(v => v[key])
    return keys.includes(cur[key]) ? acc : [...acc, cur]
  }, [])
}

export default uniqueArrayObject
