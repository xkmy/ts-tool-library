export interface EventHandler {
  handler: Function
  once?: boolean
}

export default class EventEmitter<T> {
  private events: Map<string, EventHandler[]> = new Map()

  on(type: string, handler: (data: T) => void, once?: boolean) {
    if (!this.events.has(type)) {
      this.events.set(type, [])
    }
    ;(this.events.get(type) || []).push({
      handler,
      once
    })
    return () => {
      this.off(type, handler)
    }
  }

  once(type: string, handler: (data: T) => void) {
    return this.on(type, handler, true)
  }

  emit(type: string, ...args: any[]) {
    let i = 0
    while (i < (this.events.get(type) || []).length) {
      const handlers: EventHandler[] = this.events.get(type) || []
      const { handler, once } = handlers[i]
      // 如果是一次性的，则在调用前删除
      if (once) {
        handlers.splice(i--, 1)
      }
      i++
      handler(...args)
    }
  }

  off(type?: string, handler?: Function) {
    if (!type) return

    if (!handler) {
      this.events.set(type, [])
      return
    }

    this.events.set(
      type,
      (this.events.get(type) || []).filter(item => item.handler !== handler)
    )
  }
}
 
