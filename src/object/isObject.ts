const isObject = <T>(data: T) => {
  return Object.prototype.toString.call(data) === '[object Object]'
}

export default isObject
