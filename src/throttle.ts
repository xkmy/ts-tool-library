/**
 * 节流
 * @param fn 要节流的函数
 * @param delay 延迟时间
 */
 const throttle = <T extends (...args: any[]) => any>(fn: T, delay: number) => {
  let wait = false

  const throttled = (...args: any[]): T | undefined => {
    if (wait) return
    const val = fn(...args)
    wait = true
    window.setTimeout(() => {
      wait = false
    }, delay)

    return val
  }

  return throttled
}

export default throttle


