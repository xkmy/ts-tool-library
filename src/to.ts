/**
 * 异步函数异常捕获语法简写,一般用于catch接口请求错误
 * @param promise promise 对象
 */
const to = <T>(promise: Promise<T>): Promise<[T, any]> => {
  return promise
    .then(data => {
      return [data, null] as [T, any]
    })
    .catch(err => [null, err] as [any, T])
}

export default to

