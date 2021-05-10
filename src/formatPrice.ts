const formatPrice = (price: number | string) => {
  let _price = price.toString()
  let isDecimal = false
  let needZeroCount = 2
  for (let i = 0; i < _price.length; i++) {
    const c = _price.charAt(i)
    if (c === '.') {
      isDecimal = true
    } else if (isDecimal) {
      needZeroCount = needZeroCount - 1
    }
  }
  if (needZeroCount === 1) {
    _price += '0'
  } else if (needZeroCount === 2) {
    _price += '.00'
  }
  return _price
}

export default formatPrice