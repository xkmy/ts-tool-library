import isObject from './isObject'

const isEqual = <T>(obj1: T, obj2: T): boolean => {
  if (!isObject(obj1) || !isObject(obj2)) {
    return obj1 === obj2
  }

  if (obj1 === obj2) {
    return true
  }

  const obj1Keys = Object.keys(obj1)
  const obj2Keys = Object.keys(obj2)

  if (obj1Keys.length !== obj2Keys.length) {
    return false
  }

  for (const key in obj1) {
    const res: boolean = isEqual(obj1[key], obj2[key])
    if (!res) {
      return false
    }
  }

  return true
}

export default isEqual
