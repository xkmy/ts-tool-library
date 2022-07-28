const deepSet = (obj: any, path: string | string[], value: any) => {
  const _path = Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  let temp = obj
  _path.forEach((key, index, array) => {
    if (index === _path.length - 1) {
      temp[key] = value
    } else {
      if (!temp.hasOwnProperty(key)) {
        const next = array[index + 1]
        temp[key] = String(Number(next)) === next ? [] : {}
      }
      temp = temp[key]
    }
  })
  return obj
}

export default deepSet
