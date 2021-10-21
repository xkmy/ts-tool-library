export type PromiseFn<R = any> = (...params: any) => Promise<R>

export interface Task<T> {
  isDoing: boolean
  handle: () => Promise<T>
}
