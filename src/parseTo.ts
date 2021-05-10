/**
 * JSON 解析 并捕获会出现的异常
 * @param json 要解析的json
 */
const paseTo = <T>(json: string): T | undefined => {
  try {
    return JSON.parse(json)
  } catch (error) {
    console.log('JSON解析出错')
  }
}

export default paseTo