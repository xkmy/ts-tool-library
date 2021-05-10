/**
 * 下划线转驼峰命名
 * @param str 字符串
 */

const camelize = (str: string) => {
  return str.replace(/([^_])(?:_+([^_]))/g, ($0, $1, $2) => {
    return $1 + $2.toUpperCase()
  })
}

export default camelize
