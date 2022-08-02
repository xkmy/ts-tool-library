type PromiseFn<T> = () => Promise<T>

/**
 * 并发控制器
 * @param promises Promise 函数集合
 * @param limit 最大并发数
 * @returns 响应结果数组,响应顺序和请求函数顺序一一对应,且同时包括成功和失败的响应
 */
function concurrencyControl<T>(promises: PromiseFn<T>[], limit: number): Promise<T[]> {
  let count = 0

  const length = promises.length
  const result: any[] = Array.from({ length }).fill(false)

  return new Promise(resolve => {
    async function next() {
      const current = count++

      if (current >= length) {
        !result.includes(false) && resolve(result)
        return
      }

      const promise = promises[current]

      try {
        const res = await promise()
        result[current] = res
      } catch (err) {
        result[current] = err
      } finally {
        if (current < length) next()
      }
    }

    while (count < limit) {
      next()
    }
  })
}

export default concurrencyControl
