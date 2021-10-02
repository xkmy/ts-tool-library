/**
 * 对象转化为formdata
 * @param object 
 * @returns FormData
 */
export default function getFormData(object: { [key: string]: string }): FormData {
  const formData = new FormData()
  Object.keys(object).forEach((key) => {
    const value = object[key]
    if (Array.isArray(value)) {
      value.forEach((subValue, i) =>
        formData.append(key + `[${i}]`, subValue)
      )
    } else {
      formData.append(key, object[key])
    }
  })
  return formData
}