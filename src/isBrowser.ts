
/**
 * 当前是否为浏览器环境
 */
const isBrowser = (): boolean => ![typeof window, typeof document].includes('undefined')

export default isBrowser
