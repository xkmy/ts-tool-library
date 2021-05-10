/**
 * 将file文件转换为base64
 * @param file file文件
 */
const transformFileToBase64 = (file: File): Promise<unknown> => {
  return new Promise(reslove => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      reslove(reader.result)
    }
  })
}

export default transformFileToBase64
