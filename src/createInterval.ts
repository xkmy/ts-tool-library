/**
 * 定时轮询: 可终止、可自动等待上一次响应后再进行下一次的轮询
 * @param callback 回调事件
 * @param interval 轮询间隔,单位毫秒,默认 1000 ms
 * @param immediate 是否立即执行,默认 true
 * @returns
 */
function createInterval<T>(callback: (stop: () => void) => T, interval = 1000, immediate = true) {
  let timer: number
  let isStop = false

  const stop = () => {
    isStop = true
    clearTimeout(timer)
  }

  const loop = async (): Promise<number | undefined> => {
    try {
      await callback(stop)
    } catch (err) {
      console.error('轮询出错：', err)
    }

    if (isStop) return

    timer = setTimeout(loop, interval)
    return timer
  }

  const start = async () => {
    isStop = false
    await loop()
  }

  if (immediate) {
    start()
  }

  return [start, stop]
}

export default createInterval
