/**
 * 滚动到底部
 * @param rate 速率
 */

const scrollToTop = (rate = 8) => {
  const height = document.documentElement.scrollTop || document.body.scrollTop
  if (height > 0) {
    window.requestAnimationFrame(scrollToTop)
    window.scrollTo(0, height - height / rate)
  }
}

export default scrollToTop
