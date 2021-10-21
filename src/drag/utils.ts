import { XY } from './types'

/**
 * 获取计算后的XY值
 * @param startPosition 开始位置
 * @param currentPosition 当前位置
 * @returns 当前位置 - 开始位置
 */
export const diffXy = (startPosition: XY, currentPosition: XY): XY => {
  const [originX, originY] = startPosition
  const [currentX, currentY] = currentPosition
  const x = currentX - originX
  const y = currentY - originY
  return [x, y]
}

/**
 * 获取可移动范围
 * @param vector 向量
 * @param range 向量取值范围
 * @returns 限制后的xy
 */
export const getMovableRange = (xy: XY, range: number[]): XY => {
  let [x, y] = xy

  const [top, bottom, left, right] = range

  x = Math.max(x, left)
  x = Math.min(x, right)
  y = Math.max(y, top)
  y = Math.min(y, bottom)
  return [x, y]
}

/**
 * @param transform 旧transform属性
 * @param vector 偏移向量
 * @returns 新transform属性
 */
export const setTranslatePosition = (transform: string, vector: XY): string => {
  return `translate3d(${vector[0]}px, ${vector[1]}px, 0px) ${transform.replace('none', '')}`
}
