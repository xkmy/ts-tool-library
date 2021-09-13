type Format =
  | 'YYYY-MM-DD HH:mm:ss'
  | 'YYYY-MM-DD HH:mm'
  | 'YYYY-MM-DD HH'
  | 'YYYY-MM-DD'
  | 'YYYY/MM/DD HH:mm:ss'
  | 'YYYY/MM/DD HH:mm'
  | 'YYYY/MM/DD HH'
  | 'YYYY/MM/DD'
  | 'YYYYMMDDHHmmss'
  | 'YYYYMMDDHHmm'
  | 'YYYYMMDDHH'
  | 'YYYYMMDD'
  | 'HH:mm:ss'
  | 'HH:mm'
  | 'HHmm'
  | 'mm:ss'
  | 'mmss'
  | 'HH'
  | 'mm'
  | 'ss'

type Time = {
  [props: string]: string
}

const padLeft = (value: number, num = 2, fill = '0') => String(value).padStart(num, fill)

const formatDate = (date: number | string | Date, format: Format): string => {
  let originTime = date

  if (typeof date === 'string' || typeof date === 'number') {
    if (originTime.toString().length === 10) {
      originTime = Number(originTime) * 1000
    }
  }

  const d = new Date(originTime)

  const time: Time = {
    YYYY: padLeft(d.getFullYear()),
    MM: padLeft(d.getMonth() + 1),
    DD: padLeft(d.getDate()),
    HH: padLeft(d.getHours()),
    mm: padLeft(d.getMinutes()),
    ss: padLeft(d.getSeconds()),
    M: padLeft(d.getMilliseconds(), 3)
  }
  return format.replace(new RegExp(`${Object.keys(time).join('|')}`, 'g'), subStr => {
    return time[subStr] || ''
  })
}

export default formatDate
