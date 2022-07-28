const deepGet = (obj: any, path: string | string[], defaultVal?: any) => {
  const _path = Array.isArray(path) ? path : path.replace(/\[/g, '.').replace(/\]/g, '').split('.')
  return _path.reduce((subObj, subKey) => (subObj || {})[subKey], obj) || defaultVal
}

export default deepGet
