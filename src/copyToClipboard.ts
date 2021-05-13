/**
 * 复制到粘贴板
 * @param val 要复制的值
 */
const copyToClipboard = (val: string): boolean => {
  const el = document.createElement('textarea')
  el.value = val
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selection = document.getSelection()
  const selected = selection && selection.rangeCount > 0 ? document.getSelection()?.getRangeAt(0) : false
  el.select()
  const success = document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection()?.removeAllRanges()
    document.getSelection()?.addRange(selected)
  }
  return success
}

export default copyToClipboard