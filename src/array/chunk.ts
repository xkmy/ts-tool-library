/**
 * 将一个大数组转换为指定数量的小数组
 * @param array 要分割的数组
 * @param size 分割后每个数组的长度
 */
export default function chunk<T>(array: T[], size = 1): T[][] {
  return array.reduce((rows: T[][], currentValue: T, index: number) => {
    if (index % size === 0) {
      rows.push([currentValue])
    } else {
      rows[rows.length - 1].push(currentValue)
    }
    return rows
  }, [] as T[][])
}
