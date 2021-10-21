export type XY = [number, number]

export type Ranges = [number, number, number, number]

export type Options = {
  /** 拖拽范围元素 */
  outerElement?: HTMLElement
  /** 拖拽目标元素,设置后只有该元素可拖拽 */
  targetElement?: HTMLElement
  onDragStart?: () => void
  /** 拖拽中的回调 */
  onDrag?: (xy: XY) => void
  onDragEnd?: () => void
}
