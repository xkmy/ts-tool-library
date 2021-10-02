import isEmpty from 'isEmpty'

const getIds = <T>(list: T[], key: string) => {
  if (isEmpty(list)) return ''

  let ids: string = ''
  list.forEach((v, i) => {
    if (i === 0) {
      ids = v[key]
    } else {
      ids += ',' + v[key]
    }
  })
}

export default getIds