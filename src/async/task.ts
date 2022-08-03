export type PromiseFn<R = any> = (...params: any) => Promise<R>

export interface Task<T> {
  isDoing: boolean
  handle: () => Promise<T>
}

export enum TaskHandleType {
  /**
   * 多个合并、统一处理
   */
  Unify = 0,
  /**
   * 排队、空闲时处理
   */
  Idle = 1
}

/**
 * 单一任务
 * @param promise
 * @param type
 */
export default function Task<T>(
  promise: () => Promise<T>,
  type: TaskHandleType = TaskHandleType.Unify
): Task<T> {
  let future: Promise<T> | null

  function run() {
    future = promise()
    future.finally(() => {
      future = null
    })
    return future
  }

  const handle = () => {
    if (!future) return run()
    return future
  }

  const idleHandle = async () => {
    if (!future) return run()
    await handle()
    return await handle()
  }

  const _handle = type === TaskHandleType.Unify ? handle : idleHandle

  return {
    get isDoing() {
      return !!future
    },
    handle: _handle
  }
}
