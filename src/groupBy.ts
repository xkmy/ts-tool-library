/**
 * 根据数组中对象的某个属性进行分组
 * @param array 原始数组
 * @param key 对象key
 * @returns 
 */
const groupBy = <T>(array: T[], key: keyof T) => {
  const groups: any = {}
  array.forEach(item => {
    const group = item[key]
    groups[group] = groups[group] || []
    groups[group].push(item)
  })
  return Object.keys(groups).map(group => {
    return groups[group]
  })
}

export default groupBy