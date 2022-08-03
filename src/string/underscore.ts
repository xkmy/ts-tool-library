/**
 * 驼峰转下划线命名
 * @param str 字符串
 */
const underscore = (name: string) => {
  return name.replace(/([A-Z])/g, '_$1').toLowerCase()
}

export default underscore
