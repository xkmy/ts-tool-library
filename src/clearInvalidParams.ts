/**
 * 清除对象中无效参数
 * @param params
 */
const clearInvalidParams = <T extends { [key: string]: any }>(params: T): T => {
  if (typeof params === 'object') {
    const _params = { ...params }
    for (const key in _params) {
      let value = _params[key]
      if (typeof value === 'string' && value) {
        value = value.trim()
        _params[key] = value
      }
      if (value === undefined || value === null || value === '') {
        delete _params[key]
      }
    }
    return _params
  }

  return params
}

export default clearInvalidParams
