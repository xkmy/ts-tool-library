type ValidateType =
  | 'chineseCharacter'
  | 'email'
  | 'url'
  | 'fixedTelephone'
  | 'htmlTags'
  | 'hexColor'
  | 'mobilePhone'
  | 'ipV4'
  | 'postalCode'

export const REGEX = {
  email: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
  url: /^((https|http|ftp|rtsp|mms)?:\/\/)[^\s]+/,
  fixedTelephone: /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/,
  mobilePhone: /^1[3,4,5,6,7,8,9][0-9]{9}$/,
  chineseCharacter: /[\u4e00-\u9fa5]/,
  hexColor: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  htmlTags: /^<([a-z1-6]+)([^<]+)*(?:>(.*)<\/\1>| *\/>)$/,
  ipV4: /(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)\.(25[0-5]|2[0-4]\d|[0-1]\d{2}|[1-9]?\d)/,
  postalCode: /^(0[1-7]|1[0-356]|2[0-7]|3[0-6]|4[0-7]|5[1-7]|6[1-7]|7[0-5]|8[013-6])\d{4}$/
}

const regexValidate = (value: string, type: ValidateType): boolean => {
  if (type === 'chineseCharacter') {
    return REGEX.chineseCharacter.test(value)
  }
  if (type === 'email') {
    return REGEX.email.test(value)
  }
  if (type === 'url') {
    return REGEX.url.test(value)
  }
  if (type === 'fixedTelephone') {
    return REGEX.fixedTelephone.test(value)
  }
  if (type === 'mobilePhone') {
    return REGEX.mobilePhone.test(value)
  }
  if (type === 'htmlTags') {
    return REGEX.htmlTags.test(value)
  }
  // 验证十六进制颜色值
  if (type === 'hexColor') {
    return REGEX.hexColor.test(value)
  }
  if (type === 'ipV4') {
    return REGEX.ipV4.test(value)
  }
  if (type === 'postalCode') {
    return REGEX.postalCode.test(value)
  }
  return false
}

export default regexValidate
