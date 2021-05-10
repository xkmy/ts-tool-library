const getUrlParams = (url: string) => {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce((a, v) => {
    const [key, value] = v.split('=')
    if (a[key]) {
      a[key] = ((typeof a[key] === 'string' ? [a[key]] : a[key]) as string[]).concat(value)
    } else {
      a[key] = value
    }
    return a
  }, {} as { [key: string]: string | string[] })
}

export default getUrlParams