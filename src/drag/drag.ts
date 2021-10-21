import { diffXy, getMovableRange, setTranslatePosition } from './utils'
import { XY, Ranges, Options } from './types'

/**
 * 可设置拖拽范围、拖拽移动的元素、监听拖拽事件的元素
 * @param element 拖拽元素
 * @param options 配置项
 * @returns 移除监听函数
 */
const drag = (element: HTMLElement, options?: Options): (() => void) => {
  const {
    outerElement = document.body,
    targetElement = element,
    onDragStart,
    onDrag,
    onDragEnd
  } = options || {}

  /**
   * 拖拽开始时的鼠标位置
   */
  let startPosition: XY | null = null

  /**
   * 拖拽开始时的鼠标移动范围
   */
  let startRanges: Ranges | null = null

  /**
   * 拖拽开始时的元素位移
   */
  let startTransform = ''

  /**
   * 将要拖拽的元素
   */
  element = element

  const translate = (v: XY) => {
    element.style.transform = setTranslatePosition(startTransform, v)
  }

  const onMouseDown = (e: MouseEvent) => {
    e.stopPropagation()
    // 记录当前鼠标位置
    startPosition = [e.pageX, e.pageY]

    if (outerElement && element && targetElement) {
      // 记录可拖拽范围
      const outerElementRect = outerElement.getBoundingClientRect()
      const elementRect = element.getBoundingClientRect()

      startRanges = [
        outerElementRect.top - elementRect.top,
        outerElementRect.bottom - elementRect.bottom,
        outerElementRect.left - elementRect.left,
        outerElementRect.right - elementRect.right
      ]
      startTransform = window.getComputedStyle(element).transform
    }
    typeof onDragStart === 'function' && onDragStart()
  }

  const onMouseMove = (e: MouseEvent) => {
    if (startPosition && startRanges) {
      const currentPosition: XY = [e.pageX, e.pageY]
      const diffedXy = diffXy(startPosition, currentPosition)
      const formatedXy = getMovableRange(diffedXy, startRanges)
      translate(formatedXy)
      typeof onDrag === 'function' && onDrag(formatedXy)
    }
  }

  const onMouseUp = () => {
    if (startPosition && startRanges) {
      typeof onDragEnd === 'function' && onDragEnd()
    }
    startPosition = null
  }

  const addEventListener = () => {
    if (targetElement) {
      targetElement.addEventListener('mousedown', onMouseDown)
      document.addEventListener('mousemove', onMouseMove)
      document.addEventListener('mouseup', onMouseUp)
    }
  }

  const removeEventListener = () => {
    if (targetElement) {
      targetElement.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseup', onMouseUp)
    }
  }

  addEventListener()

  return removeEventListener
}

export default drag
