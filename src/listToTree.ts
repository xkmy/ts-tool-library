import deepClone from './deepColne'

export interface List<T> {
  id: number
  value: T
  parent: number
  children?: List<T>[]
}

/**
 * 将列表数据转化为树结构
 * @param list 需要转换的列表数据
 * @param 是否直接改变原数组
 */
export default function listToTree<T>(list: List<T>[], mutateOrigin = true): List<T>[] {
  const array: List<T>[] = mutateOrigin ? list : deepClone(list)

  array.forEach(outerV => {
    if (Number(outerV.parent) !== 0) {
      array.forEach(innerV => {
        if (Number(innerV.id) === Number(outerV.parent)) {
          if (!innerV.children) {
            innerV.children = []
          }
          innerV.children.push(outerV)
        }
      })
    }
  })

  return array.filter(v => Number(v.parent) === 0)
}
