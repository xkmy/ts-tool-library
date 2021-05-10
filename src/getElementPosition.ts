/**
 * 返回元素的大小及其相对于视口的位置
 * @param element 目标元素
 */   
const getElementPosition = (element: Element | null) => {
  if (element) {
    const { height, width, x, y, bottom, left, right, top } = element.getBoundingClientRect()
    return { x, y, bottom, left, right, top, width, height }
  }
}
